import { useEffect, useState } from 'react'

import {
  CreatePaymentSubscriptionsArgs,
  PaymentType,
  SubscriptionType,
  useCreatePaymentSubscriptionsMutation,
} from '@/shared/api/paymentApi'
import { Paypal, Stripe } from '@/shared/assets'
import { Button, Card, Modal, RadioGroup, Typography } from '@/shared/ui'
import { useRouter } from 'next/router'

import s from './ChoiceSubscription.module.scss'

const subscriptions = [
  { label: '$10 per 1 Day', value: 'day' },
  { label: '$50 per 7 Days', value: 'week' },
  { label: '$100 per Month', value: 'month' },
]

export const ChoicePayment = () => {
  const [chosenSubscription, setChosenSubscription] = useState<'day' | 'month' | 'week'>('day')
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [createSubscription] = useCreatePaymentSubscriptionsMutation()

  const router = useRouter()

  useEffect(() => {
    if (router.query.success) {
      setIsOpenModal(true)
    }
  }, [router.query.success])

  const allSubscriptions = {
    day: { amount: 10, period: 'DAY' as SubscriptionType },
    month: { amount: 100, period: 'MONTHLY' as SubscriptionType },
    week: { amount: 50, period: 'WEEKLY' as SubscriptionType },
  }

  const transferToPayment = async (name: PaymentType) => {
    const paymentRequest: CreatePaymentSubscriptionsArgs = {
      amount: allSubscriptions[chosenSubscription].amount,
      baseUrl: window.location.href,
      paymentType: name,
      typeSubscription: allSubscriptions[chosenSubscription].period,
    }

    const res = await createSubscription(paymentRequest).unwrap()

    void router.push(res.url)
  }
  const changePaymentType = (value: string) => {
    setChosenSubscription(value as 'day' | 'month' | 'week')
  }

  const onCloseModal = () => {
    setIsOpenModal(false)
  }

  return (
    <div className={s.subscriptionCosts}>
      <Typography variant={'h3'}>Your subscription costs:</Typography>
      <Card style={{ padding: '12px 24px' }}>
        <RadioGroup
          defaultValue={'day'}
          items={subscriptions}
          onValueChange={value => changePaymentType(value as string)}
        />
      </Card>
      <div className={s.changePayment}>
        <div
          onClick={() => {
            transferToPayment('PAYPAL' as PaymentType)
          }}
        >
          <Paypal />
        </div>

        <Typography variant={'regularText14'}>Or</Typography>
        <div
          onClick={() => {
            transferToPayment('STRIPE' as PaymentType)
          }}
        >
          <Stripe />
        </div>
      </div>
      {router.query.success && isOpenModal ? (
        <Modal
          className={s.modal}
          isOpen={isOpenModal}
          onIsOpenChange={onCloseModal}
          title={'Success'}
        >
          <div className={s.modalBody}>
            <Typography variant={'regularText16'}>Payment was successful!</Typography>
            <Button fullWidth onClick={onCloseModal}>
              OK
            </Button>
          </div>
        </Modal>
      ) : (
        ''
      )}
      {!router.query.success && isOpenModal ? (
        <Modal
          className={s.modal}
          isOpen={isOpenModal}
          onIsOpenChange={onCloseModal}
          title={'Error'}
        >
          <div className={s.modalBody}>
            <Typography variant={'regularText16'}>
              Transaction failed. Please, write to support
            </Typography>
            <Button fullWidth onClick={onCloseModal}>
              Back to payment
            </Button>
          </div>
        </Modal>
      ) : (
        ''
      )}
    </div>
  )
}
