import type { Meta, StoryObj } from '@storybook/react'

import { DeletePostConfirmationModal } from '@/widgets/DeletePostConfirmationModal'

const meta = {
  component: DeletePostConfirmationModal,
  tags: ['autodocs'],
  title: 'Widgets/DeletePostConfirmationModal',
} satisfies Meta<typeof DeletePostConfirmationModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: true,
  },
}
