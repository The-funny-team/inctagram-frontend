import type { Meta, StoryObj } from '@storybook/react'

import { Payment } from '@/shared/api/paymentApi'
import { Payments } from '@/widgets/Payments'

const meta = {
  component: Payments,
  tags: ['autodocs'],
  title: 'Widgets/Payments',
} satisfies Meta<typeof Payments>

export default meta
type Story = StoryObj<typeof meta>

const payments: Payment[] = [
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'PAYPAL',
    price: 10,
    subscriptionId: 'string',
    subscriptionType: 'DAY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'PAYPAL',
    price: 50,
    subscriptionId: 'string',
    subscriptionType: 'MONTHLY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'STRIPE',
    price: 100,
    subscriptionId: 'string',
    subscriptionType: 'MONTHLY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'PAYPAL',
    price: 100,
    subscriptionId: 'string',
    subscriptionType: 'MONTHLY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'STRIPE',
    price: 10,
    subscriptionId: 'string',
    subscriptionType: 'DAY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'STRIPE',
    price: 50,
    subscriptionId: 'string',
    subscriptionType: 'DAY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'STRIPE',
    price: 50,
    subscriptionId: 'string',
    subscriptionType: 'DAY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'STRIPE',
    price: 100,
    subscriptionId: 'string',
    subscriptionType: 'MONTHLY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'PAYPAL',
    price: 10,
    subscriptionId: 'string',
    subscriptionType: 'MONTHLY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'PAYPAL',
    price: 50,
    subscriptionId: 'string',
    subscriptionType: 'MONTHLY',
    userId: 0,
  },
]

export const PaymentsDefault: Story = {
  args: { payments },
}
