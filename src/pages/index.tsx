import { getRootLayout } from '@/shared/layouts'
import { useTranslation } from '@/shared/lib/hooks'
import { TotalUsersCounter } from '@/widgets/TotalUsersCounter'

const Home = () => {
  const { text } = useTranslation()

  return (
    <main>
      <TotalUsersCounter />
    </main>
  )
}

Home.getLayout = getRootLayout
export default Home
