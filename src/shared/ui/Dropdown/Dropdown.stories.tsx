import type { Meta, StoryObj } from '@storybook/react'

import { DotsHorizontalIcon } from '@/shared/assets/icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Typography,
} from '@/shared/ui'

const meta = {
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const PostDropdown: Story = {
  args: {},
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <DotsHorizontalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Typography as={'span'} variant={'regularText14'}>
            Edit Post
          </Typography>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Typography as={'span'} variant={'regularText14'}>
            Delete Post
          </Typography>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
