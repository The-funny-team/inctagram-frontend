import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { PrivacyPolicy } from '@/widgets/PrivacyPolicy'

const PrivacyPolicyPage = () => {
  return (
    <>
      <HeadMeta title={'Privacy Policy'} />
      <PrivacyPolicy />
    </>
  )
}

PrivacyPolicyPage.getLayout = getRootLayout
export default PrivacyPolicyPage
