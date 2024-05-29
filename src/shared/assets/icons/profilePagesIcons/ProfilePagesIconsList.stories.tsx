import type { Meta, StoryObj } from '@storybook/react'

import {
  CopyLinkOutlineIcon,
  FavoritesIcon,
  FilledFavoritesIcon,
  LikeIcon,
  LikeOutlineIcon,
  LogOutIcon,
  PhotoIcon,
  ShareIcon,
  StatisticsIcon,
  TrashOutlineIcon,
  UnfollowOutlineIcon,
} from '@/shared/assets'
import { DeleteIcon } from '@/shared/assets/icons/DeleteIcon'
import { FollowOutlineIcon } from '@/shared/assets/icons/FollowOutlineIcon'
import { ProfilePageList } from '@/shared/assets/icons/profilePageIcons/ProfilePageList'

const meta = {
  argTypes: {},
  component: ProfilePageList,
  tags: ['autodocs'],
  title: 'Icons/Profile list',
} satisfies Meta<typeof ProfilePageList>

export default meta
type Story = StoryObj<typeof meta>

export const FollowOutline: Story = {
  args: {
    children: (
      <>
        <FollowOutlineIcon />
      </>
    ),
  },
}

export const UnfollowOutline: Story = {
  args: {
    children: (
      <>
        <UnfollowOutlineIcon />
      </>
    ),
  },
}

export const CopyLinkOutline: Story = {
  args: {
    children: (
      <>
        <CopyLinkOutlineIcon />
      </>
    ),
  },
}

export const Statistics: Story = {
  args: {
    children: (
      <>
        <StatisticsIcon />
      </>
    ),
  },
}

export const Share: Story = {
  args: {
    children: (
      <>
        <ShareIcon />
      </>
    ),
  },
}

export const LikeOutline: Story = {
  args: {
    children: (
      <>
        <LikeOutlineIcon />
      </>
    ),
  },
}

export const Like: Story = {
  args: {
    children: (
      <>
        <LikeIcon />
      </>
    ),
  },
}

export const TrashOutline: Story = {
  args: {
    children: (
      <>
        <TrashOutlineIcon />
      </>
    ),
  },
}

export const Favorites: Story = {
  args: {
    children: (
      <>
        <FavoritesIcon />
      </>
    ),
  },
}

export const FilledFavorites: Story = {
  args: {
    children: (
      <>
        <FilledFavoritesIcon />
      </>
    ),
  },
}

export const LogOut: Story = {
  args: {
    children: (
      <>
        <LogOutIcon />
      </>
    ),
  },
}

export const Delete: Story = {
  args: {
    children: (
      <>
        <DeleteIcon />
      </>
    ),
  },
}

export const PhotoOutline: Story = {
  args: {
    children: (
      <>
        <PhotoIcon />
      </>
    ),
  },
}
export const DeletePhoto: Story = {
  args: {
    children: (
      <>
        <DeleteIcon />
      </>
    ),
  },
}
