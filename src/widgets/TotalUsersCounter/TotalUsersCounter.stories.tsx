import { TotalUsersCounter } from '@/widgets/TotalUsersCounter/TotalUsersCounter'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: TotalUsersCounter,
  tags: ['autodocs'],
  title: 'Widgets/TotalUsersCount',
} satisfies Meta<typeof TotalUsersCounter>

export default meta
type Story = StoryObj<typeof meta>

export const TotalUsersCounterWidget: Story = {
  args: { totalUsersCount: 1120 },
  render: args => <TotalUsersCounter {...args} />,
}
