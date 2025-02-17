import { getProtectedNavbarLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { ProfileMain } from '@/widgets/ProfileMain'

const UserPage = () => {
  return (
    <>
      <HeadMeta title={'Profile'} />
      <ProfileMain />
    </>
  )
}

UserPage.getLayout = getProtectedNavbarLayout
export default UserPage
