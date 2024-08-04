import type { Meta, StoryObj } from '@storybook/react'

import { Payments } from '@/widgets/Payments'
import { Payment } from '@/widgets/Payments/ui/Payments'

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
    paymentType: 'Paypal',
    price: 10,
    subscriptionId: 'string',
    subscriptionType: 'DAILY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'Paypal',
    price: 50,
    subscriptionId: 'string',
    subscriptionType: 'MONTHLY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'Stripe',
    price: 100,
    subscriptionId: 'string',
    subscriptionType: 'MONTHLY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'Paypal',
    price: 100,
    subscriptionId: 'string',
    subscriptionType: 'MONTHLY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'Stripe',
    price: 10,
    subscriptionId: 'string',
    subscriptionType: 'DAILY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'Stripe',
    price: 50,
    subscriptionId: 'string',
    subscriptionType: 'ANNUAL',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'Stripe',
    price: 50,
    subscriptionId: 'string',
    subscriptionType: 'DAILY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'Stripe',
    price: 100,
    subscriptionId: 'string',
    subscriptionType: 'MONTHLY',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'Paypal',
    price: 10,
    subscriptionId: 'string',
    subscriptionType: 'ANNUAL',
    userId: 0,
  },
  {
    dateOfPayment: '2024-07-29T15:40:56.578Z',
    endDateOfSubscription: '2024-07-29T15:40:56.578Z',
    paymentType: 'Paypal',
    price: 50,
    subscriptionId: 'string',
    subscriptionType: 'MONTHLY',
    userId: 0,
  },
]

export const PaymentsDefault: Story = {
  args: { payments },
}
