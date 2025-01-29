import { useEffect, useState } from 'react'

import { useMeQuery } from '@/shared/api/authApi'
import { GetPostResponse } from '@/shared/api/postsApi'
import { useGetPublicUserInfoQuery } from '@/shared/api/profileApi'
import { BASE_API_URL } from '@/shared/const'
import { getRootLayout } from '@/shared/layouts'
import { useTranslation } from '@/shared/lib/hooks'
import { Loader, ProfileHeader, ProfilePosts, Typography } from '@/shared/ui'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params || {}
  const [authorId, postId] = slug as string[]

  const res = await fetch(`${BASE_API_URL}public-posts/user/${authorId}/0`)
  const userPosts = await res.json()
  const response = await fetch(`${BASE_API_URL}public-posts/${postId}`)
  const publicPost = await response.json()

  return {
    props: {
      error: 'No posts yet!',
      initialPosts: userPosts?.items || [],
      postId: Number(postId),
      postsTotalCount: userPosts?.totalCount,
      profileId: Number(authorId),
      publicPost,
    },
  }
}

type PropsType = {
  error: string
  initialPosts: GetPostResponse[]
  postId?: number
  postsTotalCount: number
  profileId: number
  publicPost: GetPostResponse
}
const PublicUser = ({
  error,
  initialPosts,
  postId,
  postsTotalCount,
  profileId,
  publicPost,
}: PropsType) => {
  const { text } = useTranslation()
  const t = text.pages.publicProfile
  const { data: myProfile } = useMeQuery()
  const { data: publicUser, isLoading } = useGetPublicUserInfoQuery({ profileId })
  const [posts, setPosts] = useState<GetPostResponse[]>(initialPosts)

  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(posts.length < postsTotalCount)

  const loadMorePosts = async () => {
    setLoading(true)

    try {
      const lastPostId = posts[posts.length - 1]?.id || 0
      const res = await fetch(`${BASE_API_URL}public-posts/user/${profileId}/${lastPostId}`)
      const newPosts = await res.json()

      if (newPosts.items.length > 0) {
        setPosts(prevPosts => [...prevPosts, ...newPosts.items])
      }

      if (newPosts.items.length === 0 || posts.length + newPosts.items.length >= postsTotalCount) {
        setHasMore(false)
      }
    } catch (error) {
      console.error('Failed to load more posts:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMore) {
        return
      }

      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollTop + windowHeight >= documentHeight - 100) {
        void loadMorePosts()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading, hasMore])
  const myId = Number(myProfile?.userId)

  if (isLoading) {
    return <Loader />
  }

  if (!publicUser || !publicPost) {
    return <div>{error}</div>
  }

  return (
    <div style={{ margin: '0 auto', maxWidth: '972px', paddingTop: '36px' }}>
      {publicUser && <ProfileHeader isAuth={!!myProfile} myId={myId} user={publicUser} />}
      {posts && <ProfilePosts isAuth={!!myProfile} profilePosts={posts} />}
      {loading && (
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <Typography variant={'regularText14'}>{t.loadingPosts}</Typography>
        </div>
      )}
      {!hasMore && (
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <Typography variant={'regularText14'}>{t.noMorePosts}</Typography>
        </div>
      )}
    </div>
  )
}

PublicUser.getLayout = getRootLayout

export default PublicUser
