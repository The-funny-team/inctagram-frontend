import type { Meta, StoryObj } from '@storybook/react'

import {
  ArrowLeftPaginationIcon,
  ArrowRightPaginationIcon,
  DotsPagination,
  PaginationList,
} from '@/shared/assets/icons/paginationIcons/'

const meta = {
  argTypes: {},
  component: PaginationList,
  tags: ['autodocs'],
  title: 'Icons/Pagination list',
} satisfies Meta<typeof PaginationList>

export default meta
type Story = StoryObj<typeof meta>

export const Dots: Story = {
  args: {
    children: (
      <>
        <DotsPagination />
      </>
    ),
  },
}

export const ArrowLeft: Story = {
  args: {
    children: (
      <>
        <ArrowLeftPaginationIcon />
      </>
    ),
  },
}
export const ArrowRight: Story = {
  args: {
    children: (
      <>
        <ArrowRightPaginationIcon />
      </>
    ),
  },
}
