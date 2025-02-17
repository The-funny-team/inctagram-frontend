import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { NotFound } from '@/widgets/NotFound'

const NotFoundPage = () => {
  return (
    <>
      <HeadMeta title={'404 Not found'} />
      <NotFound />
    </>
  )
}

NotFoundPage.getLayout = getRootLayout
export default NotFoundPage
