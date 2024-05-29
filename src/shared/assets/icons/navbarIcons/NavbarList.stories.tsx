import type { Meta, StoryObj } from '@storybook/react'

import {
  CreateIcon,
  FilledCreateIcon,
  FilledHomeIcon,
  FilledMessengerIcon,
  FilledProfileIcon,
  HomeIcon,
  MessengerIcon,
  ProfileIcon,
} from '@/shared/assets'
import { NavbarList } from '@/shared/assets/icons/navbarIcons/NavbarList'

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
