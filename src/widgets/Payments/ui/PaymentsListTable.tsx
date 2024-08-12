import { useGetPaymentsQuery } from '@/shared/api/paymentApi'
import { useTranslation } from '@/shared/lib/hooks'
import { Loader } from '@/shared/ui'
import {
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/shared/ui/Table'

export const PaymentsListTable = () => {
  const { text } = useTranslation()
  const t = text.pages.profile.myPayments
  const { data: payments, isLoading } = useGetPaymentsQuery()

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      {payments && payments.length ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>{t.dateOfPayment}</TableHeadCell>
              <TableHeadCell>{t.endDateOfSubscription}</TableHeadCell>
              <TableHeadCell>{t.price}</TableHeadCell>
              <TableHeadCell>{t.subscriptionType}</TableHeadCell>
              <TableHeadCell>{t.paymentType}</TableHeadCell>
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
      ) : (
        <TableEmpty />
      )}
    </>
  )
}
