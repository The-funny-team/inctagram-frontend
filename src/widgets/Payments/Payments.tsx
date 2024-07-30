import { useState } from 'react'

import { useTranslation } from '@/shared/lib/hooks'
import { Pagination } from '@/shared/ui/Pagination'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/shared/ui/Table'

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
  const { text } = useTranslation()
  const t = text.pages.profile.myPayments

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)

  const handlePageSize = (pageSize: string) => {
    setPageSize(+pageSize)
  }

  return (
    <div className={s.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t.dateOfPayment}</TableCell>
            <TableCell>{t.endDateOfSubscription}</TableCell>
            <TableCell>{t.price}</TableCell>
            <TableCell>{t.subscriptionType}</TableCell>
            <TableCell>{t.paymentType}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments?.map(payment => (
            <TableRow key={payment.userId}>
              <TableCell>{new Date(payment.dateOfPayment).toLocaleDateString('ru-RU')}</TableCell>
              <TableCell>
                {new Date(payment.endDateOfSubscription).toLocaleDateString('ru-RU')}
              </TableCell>
              <TableCell>${payment.price}</TableCell>
              <TableCell>{payment.subscriptionType}</TableCell>
              <TableCell>{payment.paymentType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
