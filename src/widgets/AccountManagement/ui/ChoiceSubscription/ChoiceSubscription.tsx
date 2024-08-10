import { useState } from 'react'

import { Card, RadioGroup, Typography } from '@/shared/ui'

import s from './ChoiceSubscription.module.scss'

import { ChoicePayment } from './ChoicePayment'

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
