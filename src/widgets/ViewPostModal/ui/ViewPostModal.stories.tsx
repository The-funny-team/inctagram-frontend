import type { Meta, StoryObj } from '@storybook/react'

import { ViewPostModal } from '@/widgets/ViewPostModal'

const meta = {
  component: ViewPostModal,
  tags: ['autodocs'],
  title: 'Widgets/ViewPostModal',
} satisfies Meta<typeof ViewPostModal>

const fewImages = [
  {
    createdAt: '2024-08-06T13:31:43.706Z',
    fileSize: 54374,
    height: 1440,
    uploadId: 'string',
    url: 'https://picsum.photos/id/5/800/800',
    width: 1440,
  },
  {
    createdAt: '2024-08-06T13:31:43.706Z',
    fileSize: 54374,
    height: 1440,
    uploadId: 'string',
    url: 'https://picsum.photos/id/10/1024/576',
    width: 1440,
  },
  {
    createdAt: '2024-08-06T13:31:43.706Z',
    fileSize: 54374,
    height: 1440,
    uploadId: 'string',
    url: 'https://picsum.photos/id/15/1080/1350',
    width: 1440,
  },
]
const oneImage = [
  {
    createdAt: '',
    fileSize: 54374,
    height: 1440,
    uploadId: 'string',
    url: 'https://picsum.photos/id/30/600/600',
    width: 1440,
  },
]

const avatar = 'https://picsum.photos/36'

const comments = [
  {
    avatar: 'https://picsum.photos/id/100/36',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, laboriosam.',
    createdAt: '14 minutes ago',
    userName: 'SpiderMan',
  },
  {
    avatar: 'https://picsum.photos/id/101/36',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, laboriosam.',
    createdAt: '2 hours ago',
    userName: 'IronMan',
  },
  {
    avatar: 'https://picsum.photos/id/102/36',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, laboriosam.',
    createdAt: '5 days ago',
    userName: 'CapitanAmerica',
  },
  {
    avatar: 'https://picsum.photos/id/103/36',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, laboriosam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, laboriosam.s',
    createdAt: '1 year ago',
    userName: 'Hulk',
  },
]

export default meta
type Story = StoryObj<typeof meta>

export const WithManyImages: Story = {
  args: {
    avatarOwner: avatar,
    comments,
    createdAt: 'July 3, 2021',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, reiciendis.',
    id: 3,
    images: fewImages,
    isLiked: true,
    isMyPost: true,
    isOpen: false,
    likesCount: 2394,
    location: '',
    owner: {
      firstName: 'John',
      lastName: 'Galt',
    },
    ownerId: 12,
    updatedAt: '1d ago',
    userName: 'Johnalt',
  },
}

export const WithOneImage: Story = {
  args: {
    avatarOwner: avatar,
    comments,
    createdAt: 'July 3, 2021',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, reiciendis.',
    id: 1,
    images: oneImage,
    isLiked: false,
    isMyPost: true,
    isOpen: false,
    likesCount: 2394,
    location: '',
    owner: {
      firstName: 'John',
      lastName: 'Galt',
    },
    ownerId: 13,
    updatedAt: '1d ago',
    userName: 'J_D-13',
  },
}

export const StrangerPost: Story = {
  args: {
    avatarOwner: avatar,
    comments,
    createdAt: 'July 3, 2021',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, reiciendis.',
    id: 2,
    images: oneImage,
    isLiked: true,
    isMyPost: false,
    isOpen: false,
    likesCount: 2394,
    location: '',
    owner: {
      firstName: 'John',
      lastName: 'Galt',
    },
    ownerId: 11,
    updatedAt: '1d ago',
    userName: 'John1_2',
  },
}
