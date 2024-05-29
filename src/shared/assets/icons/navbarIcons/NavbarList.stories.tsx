import type { Meta, StoryObj } from '@storybook/react'

import { CreateIcon } from '@/shared/assets/icons/navbarIcons/CreateIcon'
import { FilledCreateIcon } from '@/shared/assets/icons/navbarIcons/FilledCreateIcon'
import { FilledHomeIcon } from '@/shared/assets/icons/navbarIcons/FilledHomeIcon'
import { FilledMessengerIcon } from '@/shared/assets/icons/navbarIcons/FilledMessengerIcon'
import { FilledProfileIcon } from '@/shared/assets/icons/navbarIcons/FilledProfileIcon'
import { HomeIcon } from '@/shared/assets/icons/navbarIcons/HomeIcon'
import { MessengerIcon } from '@/shared/assets/icons/navbarIcons/MessengerIcon'
import { NavbarList } from '@/shared/assets/icons/navbarIcons/NavbarList'
import { ProfileIcon } from '@/shared/assets/icons/navbarIcons/ProfileIcon'

const meta = {
  argTypes: {},
  component: NavbarList,
  tags: ['autodocs'],
  title: 'Icons/Navbar list',
} satisfies Meta<typeof NavbarList>

export default meta
type Story = StoryObj<typeof meta>

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
