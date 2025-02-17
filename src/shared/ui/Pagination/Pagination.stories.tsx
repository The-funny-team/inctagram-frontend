import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from '@/shared/ui/Pagination'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultPagination: Story = {
  args: {
    currentPage: 1,
    options: [],
    pageSize: 1,
    totalCount: 200,
  },
  render: () => {
    const [current, setCurrent] = useState(1)
    const [view, setView] = useState('1')

    const options = [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
    ]

    const setPage = (currentPage: number) => {
      if (current > 0) {
        setCurrent(currentPage)
      }
    }

    return (
      <Pagination
        currentPage={current}
        onChangePage={setPage}
        onValueChange={setView}
        options={options}
        pageSize={10}
        placeholder={view}
        totalCount={200}
      />
    )
  },
}
