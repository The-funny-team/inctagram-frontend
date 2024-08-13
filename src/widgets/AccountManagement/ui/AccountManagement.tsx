import { useGetCurrentPaymentSubscriptionsQuery } from '@/shared/api/paymentApi'

import s from './AccountManagement.module.scss'

import { ChoiceSubscription } from './ChoiceSubscription'
import { CurrentSubscription } from './CurrentSubscription'

export const AccountManagement = () => {
  const { data: currentSubscription } = useGetCurrentPaymentSubscriptionsQuery()

  if (!currentSubscription?.data) {
    return null
  }

  const curSubscription = currentSubscription.data[0]

  const isValidCurSubscription =
    new Date().getTime() < new Date(curSubscription.endDateOfSubscription).getTime()

  return (
    <main className={s.root}>
      {isValidCurSubscription && <CurrentSubscription currentSubscription={curSubscription} />}
      <ChoiceSubscription currentSubscription={curSubscription} />
    </main>
  )
}
