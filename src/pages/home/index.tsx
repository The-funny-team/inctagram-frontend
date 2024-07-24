import { getProtectedNavbarLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'

const HomePage = () => (
  <>
    <HeadMeta title={'Home'} />
    <main>Home Page</main>
  </>
)

HomePage.getLayout = getProtectedNavbarLayout
export default HomePage
