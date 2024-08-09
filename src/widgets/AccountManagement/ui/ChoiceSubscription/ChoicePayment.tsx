import { useState } from 'react'

import { Paypal, Stripe } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { Card, RadioGroup, Typography } from '@/shared/ui'

import s from './ChoiceSubscription.module.scss'

const subscriptions = [
  { label: '$10 per 1 Day', value: 'day' },
  { label: '$50 per 7 Days', value: 'week' },
  { label: '$100 per Month', value: 'month' },
]

export const ChoicePayment = () => {
  const [chosenSubscription, setChosenSubscription] = useState('day')
  const transferToPayment = (name: string, time: string) => {
    const paymentRequest = {
      amount: 1,
      baseUrl: ROUTES_URL.ACCOUNT_MANAGEMENT,
      paymentType: name,
      typeSubscription: time,
    }
  }
  const changePaymentType = (value: string) => {
    setChosenSubscription(value)
  }

  return (
    <div className={s.subscriptionCosts}>
      <Typography variant={'h3'}>Your subscription costs:</Typography>
      <Card style={{ padding: '12px 24px' }}>
        <RadioGroup
          defaultValue={'day'}
          items={subscriptions}
          onValueChange={value => changePaymentType(value)}
        />
      </Card>
      <div className={s.changePayment}>
        <div
          onClick={() => {
            transferToPayment('paypal', chosenSubscription)
          }}
        >
          <Paypal />
        </div>

        <Typography variant={'regularText14'}>Or</Typography>
        <div
          onClick={() => {
            transferToPayment('stripe', chosenSubscription)
          }}
        >
          <Stripe />
        </div>
      </div>
    </div>
  )
}
