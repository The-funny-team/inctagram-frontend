import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { EmailVerification } from '@/widgets/EmailVerification'

const EmailVerificationPage = () => (
  <>
    <HeadMeta title={'Email-Verification'} />
    <main>
      <EmailVerification />
    </main>
  </>
)

EmailVerificationPage.getLayout = getRootLayout
export default EmailVerificationPage
