import type { Meta, StoryObj } from '@storybook/react'

import { MessageStatus } from '@/shared/api/messengerApi'

import { Message } from './Message'

const meta: Meta<typeof Message> = {
  component: Message,
  tags: ['autodocs'],
  title: 'Components/Message',
}

export default meta
type Story = StoryObj<typeof Message>

export const MyMessage: Story = {
  args: {
    isMyMessage: true,
    messageTime: '12:53',
    messageTxt:
      'Hi! I’m fine! Did you go into space yesterday? Hi! I’m fine! Did you go into space yesterday?',
    status: MessageStatus.READ,
    userName: 'Aleksandr',
  },
}

export const FriendMessage: Story = {
  args: {
    avatarUrl:
      'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/b912c569-f354-4dde-9477-402932e87cbc_users/1358/avatar/1a5c1685-1e30-43f0-9f1e-c1eb8f9cd90d-images-192x192',
    isMyMessage: false,
    messageTime: '12:46',
    messageTxt: 'Hi! How are you?',
    status: MessageStatus.SENT,
    userName: 'Aleksandra',
  },
}
