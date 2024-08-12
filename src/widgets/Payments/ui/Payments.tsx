import React, { useState } from 'react'

import { useGetPaymentsQuery } from '@/shared/api/paymentApi'
import { Loader } from '@/shared/ui'
import { Pagination } from '@/shared/ui/Pagination'
import { TableEmpty } from '@/shared/ui/Table'
import { PaymentsListTable } from '@/widgets/Payments/ui/PaymentsListTable'

import s from './Payments.module.scss'

type Option = {
  label: string
  value: string
}
const PAGINATION_OPTIONS: Option[] = [
  { label: '10', value: '10' },
  { label: '25', value: '25' },
  { label: '50', value: '50' },
  { label: '100', value: '100' },
]

export const Payments = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const { data: payments, isLoading } = useGetPaymentsQuery()

  const handlePageSize = (pageSize: string) => {
    setPageSize(+pageSize)
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={s.container}>
      {payments && payments.length ? (
        <div className={s.paymentsTable}>
          <PaymentsListTable payments={payments} />
          <Pagination
            className={s.pagination}
            currentPage={currentPage}
            onChangePage={setCurrentPage}
            onValueChange={handlePageSize}
            options={PAGINATION_OPTIONS}
            pageSize={pageSize}
            totalCount={payments.length}
          />
        </div>
      ) : (
        <TableEmpty />
      )}
    </div>
  )
}
