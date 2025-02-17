import type { Meta, StoryObj } from '@storybook/react'

import { DeleteIcon, FilledFavoritesIcon, FollowOutlineIcon } from '@/shared/assets'
import { CopyLinkOutlineIcon } from '@/shared/assets/icons/profilePagesIcons/CopyLinkOutlineIcon'
import { FavoritesIcon } from '@/shared/assets/icons/profilePagesIcons/FavoritesIcon'
import { LikeIcon } from '@/shared/assets/icons/profilePagesIcons/LikeIcon'
import { LikeOutlineIcon } from '@/shared/assets/icons/profilePagesIcons/LikeOutlineIcon'
import { LogOutIcon } from '@/shared/assets/icons/profilePagesIcons/LogOutIcon'
import { PhotoIcon } from '@/shared/assets/icons/profilePagesIcons/PhotoIcon'
import { ProfilePagesList } from '@/shared/assets/icons/profilePagesIcons/ProfilePagesList'
import { ShareIcon } from '@/shared/assets/icons/profilePagesIcons/ShareIcon'
import { StatisticsIcon } from '@/shared/assets/icons/profilePagesIcons/StatisticsIcon'
import { TrashOutlineIcon } from '@/shared/assets/icons/profilePagesIcons/TrashOutlineIcon'
import { UnfollowOutlineIcon } from '@/shared/assets/icons/profilePagesIcons/UnfollowOutlineIcon'

const meta = {
  argTypes: {},
  component: ProfilePagesList,
  tags: ['autodocs'],
  title: 'Icons/Profile list',
} satisfies Meta<typeof ProfilePagesList>

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
