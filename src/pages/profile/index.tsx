import { getProtectedNavbarLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { ProfileMain } from '@/widgets/ProfileMain'

const ProfilePage = () => {
  return (
    <>
      <HeadMeta title={'Profile'} />
      <ProfileMain />
    </>
  )
}

ProfilePage.getLayout = getProtectedNavbarLayout
export default ProfilePage
