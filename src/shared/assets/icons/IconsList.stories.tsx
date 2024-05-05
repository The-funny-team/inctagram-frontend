import type { Meta, StoryObj } from '@storybook/react'

import {
  ArrowDownIcon,
  ArrowLeftIcon,
  BellNotifyIcon,
  CalendarBtnLeftIcon,
  CalendarBtnRightIcon,
  CalendarIcon,
  CheckboxIcon,
  CreateIcon,
  DotsHorizontalIcon,
  EditOutlineIcon,
  EyeOutlineIcon,
  FavoritesIcon,
  FilledCreateIcon,
  FilledFavoritesIcon,
  FilledHomeIcon,
  FilledMessengerIcon,
  FilledProfileIcon,
  GithubIcon,
  GoogleIcon,
  HomeIcon,
  LogOutIcon,
  MessengerIcon,
  PhotoIcon,
  ProfileIcon,
  RecaptchaIcon,
  SearchOutlineIcon,
  StatisticsIcon,
  TrashOutlineIcon,
  UnfollowOutlineIcon,
} from '@/shared/assets'
import { DeleteIcon } from '@/shared/assets/icons/DeleteIcon'
import { FollowOutlineIcon } from '@/shared/assets/icons/FollowOutlineIcon'

import { IconsList } from './IconsList'

const meta = {
  argTypes: {},
  component: IconsList,
  tags: ['autodocs'],
  title: 'Icons/Icons list',
} satisfies Meta<typeof IconsList>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDown: Story = {
  args: {
    children: (
      <>
        <ArrowDownIcon />
      </>
    ),
  },
}

export const ArrowLeft: Story = {
  args: {
    children: (
      <>
        <ArrowLeftIcon />
      </>
    ),
  },
}

export const Checkbox: Story = {
  args: {
    children: (
      <>
        <CheckboxIcon />
      </>
    ),
  },
}

export const DotsHorizontal: Story = {
  args: {
    children: (
      <>
        <DotsHorizontalIcon />
      </>
    ),
  },
}

export const EditOutline: Story = {
  args: {
    children: (
      <>
        <EditOutlineIcon />
      </>
    ),
  },
}

export const Github: Story = {
  args: {
    children: (
      <>
        <GithubIcon />
      </>
    ),
  },
}

export const Google: Story = {
  args: {
    children: (
      <>
        <GoogleIcon />
      </>
    ),
  },
}

export const Recaptcha: Story = {
  args: {
    children: (
      <>
        <RecaptchaIcon />
      </>
    ),
  },
}

export const EyeOutline: Story = {
  args: {
    children: (
      <>
        <EyeOutlineIcon />
      </>
    ),
  },
}

export const SearchOutline: Story = {
  args: {
    children: (
      <>
        <SearchOutlineIcon />
      </>
    ),
  },
}

export const BellNotify: Story = {
  args: {
    children: (
      <>
        <BellNotifyIcon />
      </>
    ),
  },
}

export const CalendarBtnLeft: Story = {
  args: {
    children: (
      <>
        <CalendarBtnLeftIcon />
      </>
    ),
  },
}

export const CalendarBtnRight: Story = {
  args: {
    children: (
      <>
        <CalendarBtnRightIcon />
      </>
    ),
  },
}

export const CalendarImg: Story = {
  args: {
    children: (
      <>
        <CalendarIcon />
      </>
    ),
  },
}

export const Home: Story = {
  args: {
    children: (
      <>
        <HomeIcon />
      </>
    ),
  },
}

export const FilledHome: Story = {
  args: {
    children: (
      <>
        <FilledHomeIcon />
      </>
    ),
  },
}

export const Create: Story = {
  args: {
    children: (
      <>
        <CreateIcon />
      </>
    ),
  },
}

export const FilledCreate: Story = {
  args: {
    children: (
      <>
        <FilledCreateIcon />
      </>
    ),
  },
}

export const Profile: Story = {
  args: {
    children: (
      <>
        <ProfileIcon />
      </>
    ),
  },
}

export const FilledProfile: Story = {
  args: {
    children: (
      <>
        <FilledProfileIcon />
      </>
    ),
  },
}

export const Messenger: Story = {
  args: {
    children: (
      <>
        <MessengerIcon />
      </>
    ),
  },
}

export const FilledMessenger: Story = {
  args: {
    children: (
      <>
        <FilledMessengerIcon />
      </>
    ),
  },
}

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

export const Statistics: Story = {
  args: {
    children: (
      <>
        <StatisticsIcon />
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
