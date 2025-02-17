import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { TermsOfService } from '@/widgets/TermsOfService'

const TermsOfServicePage = () => {
  return (
    <>
      <HeadMeta title={'Terms of Service'} />
      <TermsOfService />
    </>
  )
}

TermsOfServicePage.getLayout = getRootLayout
export default TermsOfServicePage
