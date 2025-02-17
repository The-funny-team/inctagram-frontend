import { getTabsLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { Payments } from '@/widgets/Payments'

const PaymentsPage = () => {
  return (
    <>
      <HeadMeta title={'Payments'} />
      <main>
        <Payments />
      </main>
    </>
  )
}

PaymentsPage.getLayout = getTabsLayout
export default PaymentsPage
