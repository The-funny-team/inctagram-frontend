import { useGetUsersCountQuery } from '@/shared/api/profileApi'
import { useTranslation } from '@/shared/lib/hooks'
import { Typography } from '@/shared/ui'

import s from './TotalUsersCounter.module.scss'

type PropsType = {
  usersCount: number
}
export const TotalUsersCounter = ({ usersCount }: PropsType) => {
  const { text } = useTranslation()
  const t = text.pages.publicPage

  if (!usersCount) {
    return null
  }
  const arrayNumbers = Array.from(usersCount.toString(), Number)

  return (
    <div className={s.wrapper}>
      <Typography as={'p'} variant={'h1'}>
        {t.registeredUsers}
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
