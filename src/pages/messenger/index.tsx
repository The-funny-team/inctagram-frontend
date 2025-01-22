import { getProtectedNavbarLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'

const MessengerPage = () => {
  return (
    <>
      <HeadMeta title={'Messenger'} />
      <main>Messenger</main>
    </>
  )
}

MessengerPage.getLayout = getProtectedNavbarLayout
export default MessengerPage
