import { useState } from 'react'

import { Paypal, Stripe } from '@/shared/assets'
import { Card, RadioGroup, Typography } from '@/shared/ui'
import { ChoicePayment } from '@/widgets/AccountManagement/ui/ChoiceSubscription/ChoicePayment'

import s from './ChoiceSubscription.module.scss'

const accountTypes = [
  { label: 'Personal', value: 'personal' },
  { label: 'Business', value: 'business' },
]

export const ChoiceSubscription = () => {
  const [accountType, setAccountType] = useState('personal')
  const changeAccountType = (value: string) => {
    setAccountType(value)
  }

  return (
    <>
      <div className={s.accountType}>
        <Typography variant={'h3'}>Account type:</Typography>
        <Card style={{ padding: '12px 24px' }}>
          <RadioGroup
            defaultValue={'personal'}
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
