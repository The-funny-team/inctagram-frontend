import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { GitHubAuth } from '@/widgets/GitHubAuth'

const GitHubPage = () => {
  return (
    <>
      <HeadMeta title={'GitHub'} />
      <GitHubAuth />
    </>
  )
}

GitHubPage.getLayout = getRootLayout
export default GitHubPage
