import { useTranslation } from '@/shared/lib/hooks'
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableRow } from '@/shared/ui/Table'
import { Payment } from '@/widgets/Payments/ui/Payments'

type Props = {
  payments: Payment[]
}

export const PaymentsListTable = ({ payments }: Props) => {
  const { text } = useTranslation()
  const t = text.pages.profile.myPayments

  if (!payments.length) {
    return <TableEmpty />
  }

  return (
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
  )
}
