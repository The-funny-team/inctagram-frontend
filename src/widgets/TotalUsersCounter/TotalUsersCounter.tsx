import { useGetUsersCountQuery } from '@/shared/api/profileApi'
import { useTranslation } from '@/shared/lib/hooks'
import { Typography } from '@/shared/ui'

import s from './TotalUsersCounter.module.scss'

export const TotalUsersCounter = () => {
  const { data: usersCount } = useGetUsersCountQuery()
  const totalUsersCount = usersCount?.totalCount
  const { text } = useTranslation()
  const t = text.pages.home

  if (!totalUsersCount) {
    return null
  }
  const arrayNumbers = Array.from(totalUsersCount.toString(), Number)

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
