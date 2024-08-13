import { useState } from 'react'

import { CurrentPaymentSubscription } from '@/shared/api/paymentApi'
import { Card, RadioGroup, Typography } from '@/shared/ui'

import s from './ChoiceSubscription.module.scss'

import { ChoicePayment } from './ChoicePayment'

const accountTypes = [
  { label: 'Personal', value: 'personal' },
  { label: 'Business', value: 'business' },
]

type PropsType = {
  currentSubscription: CurrentPaymentSubscription
}

export const ChoiceSubscription = ({ currentSubscription }: PropsType) => {
  const accType = currentSubscription ? 'business' : 'personal'
  const [accountType, setAccountType] = useState(accType)
  const changeAccountType = (value: string) => {
    setAccountType(value)
  }

  return (
    <>
      <div className={s.accountType}>
        <Typography variant={'h3'}>Account type:</Typography>
        <Card style={{ padding: '12px 24px' }}>
          <RadioGroup
            defaultValue={accType}
            items={accountTypes}
            onValueChange={value => {
              changeAccountType(value)
            }}
          />
        </Card>
      </div>

      {accountType === 'business' && <ChoicePayment />}
    </>
  )
}
