import { useState } from 'react'

import {
  CurrentPaymentSubscription,
  useCancelAutoRenewalMutation,
  useGetPaymentsQuery,
} from '@/shared/api/paymentApi'
import { Card, Checkbox, Typography } from '@/shared/ui'

import s from './CurrentSubscription.module.scss'

import { ShowDate } from './ShowDate'

type PropsType = {
  currentSubscription: CurrentPaymentSubscription
}

export const CurrentSubscription = ({ currentSubscription }: PropsType) => {
  const { autoRenewal, dateOfPayment } = currentSubscription
  const [isAutoRenewal, setIsAutoRenewal] = useState(autoRenewal)
  const [cancelAutoRenew] = useCancelAutoRenewalMutation()
  const { data: payments } = useGetPaymentsQuery()
  const formatDate = (date: string) => new Date(date).getTime()
  const sortPayments =
    payments &&
    [...payments].sort(
      (a, b) => formatDate(b.endDateOfSubscription) - formatDate(a.endDateOfSubscription)
    )
  const lastDay = sortPayments && sortPayments[0].endDateOfSubscription
  const cancelRenew = () => {
    cancelAutoRenew().unwrap()
    setIsAutoRenewal(prev => !prev)
  }

  return (
    <div className={s.currentSubscription}>
      <Typography variant={'h3'}>Current Subscription:</Typography>
      <Card style={{ padding: '12px 24px' }}>
        <div className={s.info}>
          <ShowDate
            date={new Date(lastDay as string).toLocaleDateString('ru-RU')}
            headerText={'Expire at'}
          />
          {isAutoRenewal && (
            <ShowDate
              date={new Date(dateOfPayment).toLocaleDateString('ru-RU')}
              headerText={'Next payment'}
            />
          )}
        </div>
      </Card>
      <Checkbox checked={isAutoRenewal} label={'Auto-Renewal'} onCheckedChange={cancelRenew} />
    </div>
  )
}
