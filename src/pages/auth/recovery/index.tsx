import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { Recovery } from '@/widgets/Recovery/ui/Recovery'

const RecoveryPage = () => (
  <>
    <HeadMeta title={'Recovery'} />
    <Recovery />
  </>
)

RecoveryPage.getLayout = getRootLayout
export default RecoveryPage
