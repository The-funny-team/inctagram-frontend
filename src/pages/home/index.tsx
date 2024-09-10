import { useDeleteUserMutation } from '@/shared/api/profileApi'
import { getProtectedNavbarLayout } from '@/shared/layouts'
import { Button, HeadMeta } from '@/shared/ui'
import { EmailVerification } from '@/widgets/EmailVerification/ui/EmailVerification'

const HomePage = () => {
  const [deleteMe] = useDeleteUserMutation()
  const deleteMeHandler = () => {
    deleteMe()
  }

  return (
    <>
      <HeadMeta title={'Home'} />
      <main>
        Home Page
        <div>
          <Button onClick={deleteMeHandler}>delete me</Button>
        </div>
      </main>
    </>
  )
}

HomePage.getLayout = getProtectedNavbarLayout
export default HomePage
