import { getProtectedNavbarLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { EmailVerification } from '@/widgets/EmailVerification/ui/EmailVerification'

const HomePage = () => (
  <>
    <HeadMeta title={'Home'} />
    <main>Home Page</main>
  </>
)

HomePage.getLayout = getProtectedNavbarLayout
export default HomePage
