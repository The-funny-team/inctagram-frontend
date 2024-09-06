import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'

const GitHubPage = () => {
  return (
    <>
      <HeadMeta title={'GitHub'} />
      <>Github</>
    </>
  )
}

GitHubPage.getLayout = getRootLayout
export default GitHubPage
