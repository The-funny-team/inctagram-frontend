import { getProtectedNavbarLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { Messenger } from '@/widgets/Messenger'

const MessengerPage = () => {
  return (
    <>
      <HeadMeta title={'Messenger'} />
      <main>
        <Messenger />
      </main>
    </>
  )
}

MessengerPage.getLayout = getProtectedNavbarLayout
export default MessengerPage
