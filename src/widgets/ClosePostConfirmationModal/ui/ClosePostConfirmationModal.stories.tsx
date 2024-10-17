import type { Meta, StoryObj } from '@storybook/react'

import { ClosePostConfirmationModal } from '@/widgets/ClosePostConfirmationModal'

const meta = {
  component: ClosePostConfirmationModal,
  tags: ['autodocs'],
  title: 'Widgets/ClosePostConfirmationModal',
} satisfies Meta<typeof ClosePostConfirmationModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: true,
  },
}
