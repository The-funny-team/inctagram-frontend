import { CurrentPaymentSubscription } from '@/shared/api/paymentApi'
import { Card, Checkbox, Typography } from '@/shared/ui'

import s from './CurrentSubscription.module.scss'

import { ShowDate } from './ShowDate'

type PropsType = {
  currentSubscription: CurrentPaymentSubscription
}

export const CurrentSubscription = ({ currentSubscription }: PropsType) => {
  const { autoRenewal, dateOfPayment, endDateOfSubscription } = currentSubscription

  return (
    <div className={s.currentSubscription}>
      <Typography variant={'h3'}>Current Subscription:</Typography>
      <Card style={{ padding: '12px 24px' }}>
        <div className={s.info}>
          <ShowDate
            date={new Date(endDateOfSubscription).toLocaleDateString('ru-RU')}
            headerText={'Expire at'}
          />
          <ShowDate
            date={new Date(dateOfPayment).toLocaleDateString('ru-RU')}
            headerText={'Next payment'}
          />
        </div>
      </Card>
      <Checkbox checked={autoRenewal} label={'Auto-Renewal'} />
    </div>
  )
}
