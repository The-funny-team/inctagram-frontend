import { useState } from 'react'

import { Card, Checkbox, Typography } from '@/shared/ui'

import s from './CurrentSubscription.module.scss'

import { ShowDate } from './ShowDate'

export const CurrentSubscription = () => {
  const [isShowNextPayment, setShowNextPayment] = useState(false)

  const showNextPayment = () => {
    setShowNextPayment(!isShowNextPayment)
  }

  return (
    <div className={s.currentSubscription}>
      <Typography variant={'h3'}>Current Subscription:</Typography>
      <Card style={{ padding: '12px 24px' }}>
        <div className={s.info}>
          <ShowDate date={'12.12.2022'} headerText={'Expire at'} />
          {isShowNextPayment && <ShowDate date={'12.12.2022'} headerText={'Next payment'} />}
        </div>
      </Card>
      <Checkbox label={'Auto-Renewal'} onCheckedChange={showNextPayment} />
    </div>
  )
}
