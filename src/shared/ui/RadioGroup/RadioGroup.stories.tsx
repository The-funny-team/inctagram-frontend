import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './RadioGroup'

const accountTypes = [
  { label: 'Personal', value: 'personal' },
  { label: 'Business', value: 'business' },
]
const subscriptions = [
  { label: '$10 per 1 Day', value: 'day' },
  { label: '$50 per 7 Days', value: 'week' },
  { label: '$100 per Month', value: 'month' },
]

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroupAccount: Story = {
  args: {
    defaultValue: 'personal',
    items: accountTypes,
  },
}

export const RadioGroupSubscriptions: Story = {
  args: {
    defaultValue: 'day',
    items: subscriptions,
  },
}
