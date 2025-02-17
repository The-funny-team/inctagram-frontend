import type { Meta, StoryObj } from '@storybook/react'

import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowSliderLeftIcon,
  ArrowSliderRightIcon,
  BellNotifyIcon,
  CalendarBtnLeftIcon,
  CalendarBtnRightIcon,
  CalendarIcon,
  CheckboxIcon,
  DotIcon,
  DotsHorizontalIcon,
  EditOutlineIcon,
  EyeOutlineIcon,
  GithubIcon,
  GoogleIcon,
  RecaptchaIcon,
  SearchOutlineIcon,
} from '@/shared/assets'

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

export const ArrowSliderLeft: Story = {
  args: {
    children: (
      <>
        <ArrowSliderLeftIcon />
      </>
    ),
  },
}

export const ArrowSliderRight: Story = {
  args: {
    children: (
      <>
        <ArrowSliderRightIcon />
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

export const Dot: Story = {
  args: {
    children: (
      <>
        <DotIcon />
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
