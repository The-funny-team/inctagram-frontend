import { GetPostsResponse } from '@/shared/api/postsApi'
import { BASE_API_URL } from '@/shared/const'
import { getRootLayout } from '@/shared/layouts'
import { HeadMeta, PublicPosts, Typography } from '@/shared/ui'
import { TotalUsersCounter } from '@/widgets/TotalUsersCounter'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${BASE_API_URL}/public/post?take=4`)
  const posts: GetPostsResponse = await res.json()

  return {
    props: {
      error: 'No posts yet!',
      publicPosts: posts,
    },
    revalidate: 60,
  }
}

type PropsType = {
  error: string
  publicPosts: GetPostsResponse
}

const PublicPage = ({ error, publicPosts }: PropsType) => {
  return (
    <>
      <HeadMeta title={'public page'} />
      {publicPosts?.data ? (
        <main style={{ margin: '0 auto', maxWidth: '972px' }}>
          <TotalUsersCounter />
          {publicPosts && <PublicPosts publicPosts={publicPosts.data} />}
        </main>
      ) : (
        <div style={{ paddingTop: '36px', textAlign: 'center' }}>
          <Typography as={'p'} variant={'boldText16'}>
            {error}
          </Typography>
        </div>
      )}
    </>
  )
}

PublicPage.getLayout = getRootLayout
export default PublicPage
