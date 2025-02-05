import type { Meta, StoryObj } from '@storybook/react'

import { MessageStatus, MessageType, MessageViewDto } from '@/shared/api/messengerApi'

import { LatestChat } from './LatestChat'

const latestChat: MessageViewDto = {
  avatars: [
    {
      createdAt: '2024-08-06T13:38:26.600Z',
      fileSize: 10571,
      height: 192,
      url: 'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/4164019e-a863-4222-ab5b-e2657e8a8bb2_users/848/avatar/c309d797-46fe-4711-89a3-0349d083982f-images-192x192',
      width: 192,
    },
  ],
  createdAt: '2025-01-21T17:06:14.125Z',
  id: 48,
  messageText: 'Ahahahah, just kidding, smiling, etc.',
  messageType: MessageType.TEXT,
  ownerId: 848,
  receiverId: 234,
  status: MessageStatus.READ,
  updatedAt: '2025-01-21T17:06:14.125Z',
  userName: 'apple23',
}

const meta = {
  component: LatestChat,
  tags: ['autodocs'],
  title: 'Widgets/LatestChat',
} satisfies Meta<typeof LatestChat>

export default meta
type Story = StoryObj<typeof meta>

export const WithMyLastMessage: Story = {
  args: { isMyMsg: true, latestChatData: latestChat },
}

export const WithUserLastMessage: Story = {
  args: { isMyMsg: false, latestChatData: latestChat },
}
