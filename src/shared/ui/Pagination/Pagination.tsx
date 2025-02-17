import {
  ArrowLeftPaginationIcon,
  ArrowRightPaginationIcon,
} from '@/shared/assets/icons/paginationIcons'
import { Select, SelectProps, Typography } from '@/shared/ui'
import { usePagination } from '@/shared/ui/Pagination/usePagination'
import { clsx } from 'clsx'

import s from './Pagination.module.scss'

type Props = {
  className?: string
  currentPage?: number
  onChangePage?: (page: number) => void
  pageSize?: number
  siblingCount?: number
  totalCount?: number
} & Omit<SelectProps, 'label' | 'value'>

export const Pagination = ({
  className,
  currentPage = 1,
  onChangePage,
  pageSize = 10,
  siblingCount = 1,
  totalCount = 0,
  ...restProps
}: Props) => {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  if (totalCount === 0) {
    return null
  }

  if (currentPage === 0 || paginationRange.length < 2) {
    return (
      <Typography as={'div'} className={s.selectWithoutPagination} variant={'regularText14'}>
        Show{' '}
        <Select {...restProps} className={s.selectWithPagination} value={pageSize.toString()} /> on
        page
      </Typography>
    )
  }

  const handleClickPrev = () => {
    if (onChangePage) {
      onChangePage(currentPage - 1)
    }
  }

  const handleClickNext = () => {
    if (onChangePage) {
      onChangePage(currentPage + 1)
    }
  }

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === paginationRange[paginationRange.length - 1]

  return (
    <div className={clsx(s.container, className)}>
      <div className={s.pagination}>
        <button
          className={clsx(s.item, isFirstPage && s.disabled)}
          disabled={isFirstPage}
          onClick={handleClickPrev}
        >
          <ArrowLeftPaginationIcon color={isFirstPage ? '#808080' : '#fff'} />
        </button>
        {paginationRange.map((num, i) => {
          if (num === 0) {
            return (
              <span className={clsx(s.item, s.dots)} key={i}>
                &#8230;
              </span>
            )
          }
          const isCurrentPage = num === currentPage

          const handleChangePage = () => {
            if (onChangePage) {
              onChangePage(num)
            }
          }

          return (
            <button
              className={clsx(s.item, isCurrentPage && s.selected)}
              key={i}
              onClick={handleChangePage}
            >
              <Typography as={'span'} variant={'regularText14'}>
                {num}
              </Typography>
            </button>
          )
        })}
        <button
          className={clsx(s.item, isLastPage && s.disabled)}
          disabled={isLastPage}
          onClick={handleClickNext}
        >
          <ArrowRightPaginationIcon color={isLastPage ? '#808080' : '#fff'} />
        </button>
      </div>
      <Typography as={'div'} className={s.selectWrapper} variant={'regularText14'}>
        Show <Select {...restProps} value={pageSize.toString()} /> on page
      </Typography>
    </div>
  )
}
