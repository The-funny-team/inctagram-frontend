import { useMeQuery } from '@/shared/api/authApi'
import { GetPostResponse } from '@/shared/api/postsApi'
import { useGetPublicUserInfoQuery } from '@/shared/api/profileApi'
import { BASE_API_URL } from '@/shared/const'
import { getRootLayout } from '@/shared/layouts'
import { ProfileHeader, ProfilePosts } from '@/shared/ui'
import { GetServerSideProps } from 'next'
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params || {}
  const [authorId, postId] = slug as string[]

  const res = await fetch(`${BASE_API_URL}public-posts/user/${authorId}`)
  const userPosts = await res.json()
  const response = await fetch(`${BASE_API_URL}public-posts/${postId}`)
  const publicPost = await response.json()

  return {
    props: {
      error: 'No posts yet!',
      postId: Number(postId),
      posts: userPosts?.items,
      postsTotalCount: userPosts?.totalCount,
      profileId: Number(authorId),
      publicPost,
    },
  }
}

type PropsType = {
  error: string
  postId?: number
  posts: GetPostResponse[]
  postsTotalCount: number
  profileId: number
  publicPost: GetPostResponse
}
const PublicUser = ({
  error,
  postId,
  posts,
  postsTotalCount,
  profileId,
  publicPost,
}: PropsType) => {
  const { data: myProfile } = useMeQuery()
  const { data: publicUser } = useGetPublicUserInfoQuery({ profileId })

  if (!publicUser || !publicPost) {
    return <div>{error}</div>
  }

  return (
    <div style={{ margin: '0 auto', maxWidth: '972px', paddingTop: '36px' }}>
      {publicUser && (
        <ProfileHeader isAuth={!!myProfile} postsTotalCount={postsTotalCount} user={publicUser} />
      )}
      {posts && (
        <ProfilePosts isShowPostId={postId} loggedUserId={myProfile?.userId} profilePosts={posts} />
      )}
    </div>
  )
}

PublicUser.getLayout = getRootLayout

export default PublicUser
