import type { Meta, StoryObj } from '@storybook/react'

import { NotificationsDropdown } from '@/widgets/NotificationsDropdown/ui/NotificationsDropdown'

const meta = {
  component: NotificationsDropdown,
  tags: ['autodocs'],
  title: 'Components/NotificationsDropdown',
} satisfies Meta<typeof NotificationsDropdown>

export default meta
type Story = StoryObj<typeof meta>

const notifications = [
  {
    id: 1,
    isRead: false,
    message: 'Your next payment will be debited in 1 day',
    notifyAt: '2024-08-19T10:05:41.022Z',
  },
  {
    id: 2,
    isRead: false,
    message: 'Your next payment will be debited in 1 day',
    notifyAt: '2024-08-19T10:05:41.022Z',
  },
  {
    id: 3,
    isRead: false,
    message: 'Your next payment will be debited in 1 day',
    notifyAt: '2024-08-19T10:05:41.022Z',
  },
  {
    id: 4,
    isRead: false,
    message: 'Your next payment will be debited in 1 day',
    notifyAt: '2024-08-19T10:05:41.022Z',
  },
  {
    id: 5,
    isRead: true,
    message: 'Your next payment will be debited in 1 day',
    notifyAt: '2024-08-19T10:05:41.022Z',
  },
  {
    id: 6,
    isRead: false,
    message: 'Your next payment will be debited in 1 day',
    notifyAt: '2024-08-19T10:05:41.022Z',
  },
]

export const NotificationsDefault: Story = {
  args: { notifications },
}
