import type { Meta, StoryObj } from '@storybook/react'

import { MessageStatus, MessageType } from '@/shared/api/messengerApi'

import { Message } from './Message'

const meta: Meta<typeof Message> = {
  component: Message,
  tags: ['autodocs'],
  title: 'Components/Message',
}

const myMessage = {
  createdAt: '2025-02-16T09:19:07.536Z',
  id: 3008,
  messageText: 'socket',
  messageType: MessageType.TEXT,
  ownerId: 856,
  receiverId: 848,
  status: MessageStatus.SENT,
  updatedAt: '2025-02-16T09:19:07.536Z',
}

export default meta
type Story = StoryObj<typeof Message>

export const MyMessage: Story = {
  args: {
    avatarUrl: '',
    currentUserId: 848,
    message: myMessage,
    userName: 'Aleksandr',
  },
}

export const FriendMessage: Story = {
  args: {
    avatarUrl:
      'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/b912c569-f354-4dde-9477-402932e87cbc_users/1358/avatar/1a5c1685-1e30-43f0-9f1e-c1eb8f9cd90d-images-192x192',
    currentUserId: 1,
    message: myMessage,
    userName: 'Aleksandra',
  },
}
