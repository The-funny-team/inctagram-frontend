import { useGetProfileInfoQuery } from '@/shared/api/profileApi'
import { getTabsLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { AddProfilePhoto } from '@/widgets/AddProfilePhoto'
import { ProfileInfoForm } from '@/widgets/ProfileInfoForm'

import s from './GeneralPage.module.scss'

const GeneralPage = () => {
  const { data: userInfo } = useGetProfileInfoQuery()
  const avatar = userInfo?.avatars[0]?.url
  const classNames = {
    page: s.page,
    photoUploader: s.photoUploader,
  }

  return (
    <>
      <HeadMeta title={'General'} />
      <main className={classNames.page}>
        <AddProfilePhoto avatar={avatar} />
        <ProfileInfoForm />
      </main>
    </>
  )
}

GeneralPage.getLayout = getTabsLayout
export default GeneralPage
