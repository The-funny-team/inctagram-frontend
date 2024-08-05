import { useMeQuery } from '@/shared/api/authApi'
import { GetPostResponse } from '@/shared/api/postsApi'
import { useGetUserInfoQuery } from '@/shared/api/profileApi'
import { BASE_API_URL } from '@/shared/const'
import { getRootLayout } from '@/shared/layouts'
import { ProfileHeader, ProfilePosts } from '@/shared/ui'
import { GetServerSideProps } from 'next'
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params || {}
  const [authorId, postId] = slug as string[]
  const res = await fetch(`${BASE_API_URL}/public/post/user/${authorId}`)
  const userPosts = await res.json()
  const response = await fetch(`${BASE_API_URL}/public/post/${postId}`)
  const publicPost = await response.json()

  return {
    props: {
      error: 'No posts yet!',
      posts: userPosts?.data,
      postsTotalCount: userPosts?.totalCount,
      publicPost,
      userName: userPosts?.data[0]?.author?.name,
    },
  }
}

type PropsType = {
  error: string
  posts: GetPostResponse[]
  postsTotalCount: number
  publicPost: GetPostResponse
  userName: string
}
const PublicUser = ({ error, posts, postsTotalCount, publicPost, userName }: PropsType) => {
  const { data: myProfile } = useMeQuery()
  const { data: publicUser } = useGetUserInfoQuery({ userName: userName })

  if (!publicUser || !publicPost) {
    return <div>{error}</div>
  }

  return (
    <div style={{ margin: '0 auto', maxWidth: '972px', paddingTop: '36px' }}>
      {publicUser && (
        <ProfileHeader isAuth={!!myProfile} postsTotalCount={postsTotalCount} user={publicUser} />
      )}
      {posts && <ProfilePosts isMyPost={false} isShowPostId={publicPost.id} profilePosts={posts} />}
    </div>
  )
}

PublicUser.getLayout = getRootLayout

export default PublicUser
