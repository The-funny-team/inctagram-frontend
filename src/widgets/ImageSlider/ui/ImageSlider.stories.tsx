import type { Meta, StoryObj } from '@storybook/react'

import { ImageSlider } from '@/widgets/ImageSlider'

const meta = {
  component: ImageSlider,
  tags: ['autodocs'],
  title: 'Widgets/ImageSlider',
} satisfies Meta<typeof ImageSlider>

const fewImages = [
  'https://picsum.photos/600',
  'https://picsum.photos/601',
  'https://picsum.photos/602',
  'https://picsum.photos/603',
  'https://picsum.photos/604',
]

const oneImage = ['https://picsum.photos/600']

export default meta
type Story = StoryObj<typeof meta>

export const WithManyImages: Story = {
  args: { imageUrls: fewImages },
  render: args => <ImageSlider {...args} />,
}

export const WithOneImage: Story = {
  args: { imageUrls: oneImage },
  render: args => <ImageSlider {...args} />,
}
