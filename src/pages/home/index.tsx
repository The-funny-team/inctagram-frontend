import { getProtectedNavbarLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { Home } from '@/widgets/Home'

const HomePage = () => {
  return (
    <>
      <HeadMeta title={'Home'} />
      <main>
        <Home />
      </main>
    </>
  )
}

HomePage.getLayout = getProtectedNavbarLayout
export default HomePage
