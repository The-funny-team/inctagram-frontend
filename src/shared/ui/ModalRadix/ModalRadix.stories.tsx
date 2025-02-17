import type { Meta, StoryObj } from '@storybook/react'

import { ModalRadix } from '@/shared/ui'
import { Button } from '@/shared/ui/'

const meta = {
  argTypes: {
    title: {
      control: 'text',
      description: 'Title for modal',
    },
  },
  component: ModalRadix,
  tags: ['autodocs'],
  title: 'Components/ModalRadix',
} satisfies Meta<typeof ModalRadix>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultModal: Story = {
  args: {
    children: (
      <div style={{ padding: '18px 24px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus natus repudiandae
        voluptas. Atque culpa dignissimos distinctio eaque eius est ex, excepturi hic minima nam
        necessitatibus nobis placeat quod unde, voluptatum!
      </div>
    ),
    title: 'Content title',
    trigger: <Button>Open modal</Button>,
  },
}
