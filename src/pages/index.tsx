import { GetPostsResponse } from '@/shared/api/postsApi'
import { BASE_API_URL } from '@/shared/const'
import { getRootLayout } from '@/shared/layouts'
import { HeadMeta, Loader, PublicPosts, RedirectToProfilePage } from '@/shared/ui'
import { TotalUsersCounter } from '@/widgets/TotalUsersCounter'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${BASE_API_URL}/public/post?take=4`)
  const posts: GetPostsResponse = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      publicPosts: posts,
    },
    revalidate: 60,
  }
}

type PropsType = {
  publicPosts: GetPostsResponse
}

const PublicPage = ({ publicPosts }: PropsType) => {
  return (
    <>
      <HeadMeta title={'public page'} />
      <RedirectToProfilePage>
        {publicPosts?.data ? (
          <main style={{ margin: '0 auto', maxWidth: '972px' }}>
            <TotalUsersCounter />
            {publicPosts && <PublicPosts publicPosts={publicPosts.data} />}
          </main>
        ) : (
          <Loader />
        )}
      </RedirectToProfilePage>
    </>
  )
}

PublicPage.getLayout = getRootLayout
export default PublicPage
