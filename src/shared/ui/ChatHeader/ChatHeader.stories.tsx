import type { Meta, StoryObj } from '@storybook/react'

import { ChatHeader } from './ChatHeader'

const meta = {
  component: ChatHeader,
  tags: ['autodocs'],
  title: 'Components/ChatHeader',
} satisfies Meta<typeof ChatHeader>

export default meta
type Story = StoryObj<typeof meta>

export const WithUserData: Story = {
  args: {
    avatarUrl:
      'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/4164019e-a863-4222-ab5b-e2657e8a8bb2_users/848/avatar/c309d797-46fe-4711-89a3-0349d083982f-images-192x192',
    userName: 'Aleksandr_23',
  },
}

export const Empty: Story = {}
