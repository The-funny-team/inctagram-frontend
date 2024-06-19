import { getRootLayout } from '@/shared/layouts'
import { TotalUsersCounter } from '@/widgets/TotalUsersCounter'

const Home = () => {
  return (
    <main>
      <TotalUsersCounter />
    </main>
  )
}

Home.getLayout = getRootLayout
export default Home
