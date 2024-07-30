import { useState } from 'react'

import { Pagination } from '@/shared/ui/Pagination'
import { PaymentsListTable } from '@/widgets/Payments/ui/PaymentsListTable'

import s from './Payments.module.scss'

export type Payment = {
  dateOfPayment: string
  endDateOfSubscription: string
  paymentType: 'Paypal' | 'Stripe'
  price: number
  subscriptionId: string
  subscriptionType: string
  userId: number
}

type Props = {
  payments: Payment[]
}

const PAGINATION_OPTIONS = [
  { label: '10', value: '10' },
  { label: '25', value: '25' },
  { label: '50', value: '50' },
  { label: '100', value: '100' },
]

export const Payments = ({ payments }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)

  const handlePageSize = (pageSize: string) => {
    setPageSize(+pageSize)
  }

  return (
    <div className={s.container}>
      <PaymentsListTable payments={payments} />
      <Pagination
        currentPage={currentPage}
        onChangePage={setCurrentPage}
        onValueChange={handlePageSize}
        options={PAGINATION_OPTIONS}
        pageSize={pageSize}
      />
    </div>
  )
}
