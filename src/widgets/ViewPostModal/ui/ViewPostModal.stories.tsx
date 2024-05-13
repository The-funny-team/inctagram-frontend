import type { Meta, StoryObj } from '@storybook/react'

import { ViewPostModal } from '@/widgets/ViewPostModal'

const meta = {
  component: ViewPostModal,
  tags: ['autodocs'],
  title: 'Widgets/ViewPostModal',
} satisfies Meta<typeof ViewPostModal>

const fewImages = [
  'https://picsum.photos/id/5/800/800',
  'https://picsum.photos/id/10/1024/576',
  'https://picsum.photos/id/15/1080/1350',
]
const oneImage = ['https://picsum.photos/id/30/600/600']

const avatar = 'https://picsum.photos/36'

const comments = [
  {
    avatar: 'https://picsum.photos/id/100/36',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, laboriosam.',
    createdAt: '2 hours ago',
    userName: 'SpiderMan',
  },
  {
    avatar: 'https://picsum.photos/id/101/36',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, laboriosam.',
    createdAt: '14 minutes ago',
    userName: 'IronMan',
  },
  {
    avatar: 'https://picsum.photos/id/102/36',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, laboriosam.',
    createdAt: '5 days ago',
    userName: 'CapitanAmerica',
  },
]

export default meta
type Story = StoryObj<typeof meta>

export const WithManyImages: Story = {
  args: {
    avatar,
    comments,
    createdAt: 'July 3, 2021',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, reiciendis.',
    imageUrls: fewImages,
    isMyPost: true,
    likesCount: 2394,
    userName: 'John Galt',
  },
}

export const WithOneImage: Story = {
  args: {
    avatar,
    comments,
    createdAt: 'July 3, 2021',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, reiciendis.',
    imageUrls: oneImage,
    isMyPost: true,
    likesCount: 2394,
    userName: 'John Galt',
  },
}

export const StrangerPost: Story = {
  args: {
    avatar,
    comments,
    createdAt: 'July 3, 2021',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, reiciendis.',
    imageUrls: oneImage,
    isMyPost: false,
    likesCount: 2394,
    userName: 'Friend',
  },
}
