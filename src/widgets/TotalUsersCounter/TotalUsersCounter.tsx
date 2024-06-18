import { Typography } from '@/shared/ui'

import s from './TotalUsersCounter.module.scss'

type PropsType = {
  totalUsersCount: number
}

export const TotalUsersCounter = ({ totalUsersCount }: PropsType) => {
  if (!totalUsersCount) {
    return null
  }
  const arrayNumbers = Array.from(totalUsersCount.toString(), Number)

  return (
    <div className={s.wrapper}>
      <Typography as={'p'} variant={'h1'}>
        Registered users:
      </Typography>
      <div className={s.counter}>
        {arrayNumbers.map((num, idx) => (
          <div className={s.digitShape} key={idx}>
            <Typography as={'p'} className={s.digit} variant={'h2'}>
              {num}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}
