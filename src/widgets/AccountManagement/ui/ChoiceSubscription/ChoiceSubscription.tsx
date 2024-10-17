import { useState } from 'react'

import { CurrentPaymentSubscription } from '@/shared/api/paymentApi'
import { useTranslation } from '@/shared/lib/hooks'
import { Card, RadioGroup, Typography } from '@/shared/ui'

import s from './ChoiceSubscription.module.scss'

import { ChoicePayment } from './ChoicePayment'

type PropsType = {
  currentSubscription: CurrentPaymentSubscription
}

export const ChoiceSubscription = ({ currentSubscription }: PropsType) => {
  const accType = currentSubscription ? 'business' : 'personal'
  const [accountType, setAccountType] = useState(accType)
  const { text } = useTranslation()
  const t = text.pages.profile.management.accountType

  const accountTypes = [
    { label: t.personal, value: 'personal' },
    { label: t.business, value: 'business' },
  ]
  const changeAccountType = (value: string) => {
    setAccountType(value)
  }

  return (
    <>
      <div className={s.accountType}>
        <Typography variant={'h3'}>{t.title}</Typography>
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
