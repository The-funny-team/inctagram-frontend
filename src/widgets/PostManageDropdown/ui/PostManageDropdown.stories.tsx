import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu } from '@/shared/ui'
import { PostManageDropdown } from '@/widgets/PostManageDropdown'

const meta = {
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Widgets/PostManageDropdown',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const PostDropdownWithMyPost: Story = {
  args: {},
  render: () => <PostManageDropdown isMyPost />,
}

export const PostDropdownWithAnotherUserPost: Story = {
  args: {},
  render: () => <PostManageDropdown isMyPost={false} />,
}
