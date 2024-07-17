import { GetPostResponse } from '@/shared/api/postsApi'
import { useGetUserInfoQuery, useMeQuery } from '@/shared/api/profileApi'
import { BASE_API_URL } from '@/shared/const'
import { getRootLayout } from '@/shared/layouts'
import { ProfileHeader, ProfilePosts } from '@/shared/ui'
import { GetServerSideProps } from 'next'
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params || {}
  const res = await fetch(`${BASE_API_URL}/public/post/user/${id}`)
  const userPosts = await res.json()

  return {
    props: {
      error: 'No posts yet!',
      posts: userPosts?.data,
      postsTotalCount: userPosts?.totalCount,
      userName: userPosts?.data[0]?.author?.name,
    },
  }
}

type PropsType = {
  posts: GetPostResponse[]
  postsTotalCount: number
  userName: string
}
const PublicUser = ({ posts, postsTotalCount, userName }: PropsType) => {
  const { data: myProfile } = useMeQuery()
  const { data: publicUser } = useGetUserInfoQuery({ userName: userName })

  return (
    <div style={{ margin: '0 auto', maxWidth: '972px', paddingTop: '36px' }}>
      {publicUser && (
        <ProfileHeader isAuth={!!myProfile} postsTotalCount={postsTotalCount} user={publicUser} />
      )}
      {posts && <ProfilePosts isMyPost={false} profilePosts={posts} />}
    </div>
  )
}

PublicUser.getLayout = getRootLayout

export default PublicUser
