import { useState } from 'react'

import {
  CurrentPaymentSubscription,
  useCancelAutoRenewalMutation,
  useGetPaymentsQuery,
} from '@/shared/api/paymentApi'
import { useTranslation } from '@/shared/lib/hooks'
import { Card, Checkbox, Typography } from '@/shared/ui'

import s from './CurrentSubscription.module.scss'

import { ShowDate } from './ShowDate'

type PropsType = {
  currentSubscription: CurrentPaymentSubscription
  isRenewal: boolean
}

export const CurrentSubscription = ({ currentSubscription, isRenewal }: PropsType) => {
  const { autoRenewal, endDateOfSubscription } = currentSubscription
  const [isAutoRenewal, setIsAutoRenewal] = useState(autoRenewal)
  const [cancelAutoRenew] = useCancelAutoRenewalMutation()
  const { data: payments } = useGetPaymentsQuery()
  const { text } = useTranslation()
  const t = text.pages.profile.management.currSubscription
  const lastDay =
    payments && new Date(payments[0].endDateOfSubscription).toLocaleDateString('ru-RU')
  const nextPayment = new Date(endDateOfSubscription)
  const nextPaymentDate = new Date(
    nextPayment.setDate(nextPayment.getDate() + 1)
  ).toLocaleDateString('ru-RU')

  const cancelRenew = () => {
    cancelAutoRenew().unwrap()
    setIsAutoRenewal(prev => !prev)
  }

  return (
    <div className={s.currentSubscription}>
      <Typography variant={'h3'}>{t.title}</Typography>
      <Card style={{ padding: '12px 24px', width: '100%' }}>
        <div className={s.info}>
          <ShowDate date={lastDay as string} headerText={t.lastDay} />
          {isAutoRenewal && <ShowDate date={nextPaymentDate} headerText={t.nextPayment} />}
        </div>
      </Card>
      {isRenewal && (
        <Checkbox checked={isAutoRenewal} label={t.autoRenew} onCheckedChange={cancelRenew} />
      )}
    </div>
  )
}
