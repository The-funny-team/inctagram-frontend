import { getTabsLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { AccountManagement } from '@/widgets/AccountManagement/ui/AccountManagement'

const ManagementPage = () => {
  return (
    <>
      <HeadMeta title={'Account Management'} />
      <AccountManagement />
    </>
  )
}

ManagementPage.getLayout = getTabsLayout
export default ManagementPage
