import { Typography } from '@/shared/ui'

import s from './CurrentSubscription.module.scss'
type Props = {
  date: string
  headerText: string
}

export const ShowDate = ({ date, headerText }: Props) => {
  return (
    <div>
      <Typography className={s.text} variant={'regularText14'}>
        {headerText}
      </Typography>
      <Typography className={s.data} variant={'regularText14'}>
        {date}
      </Typography>
    </div>
  )
}
