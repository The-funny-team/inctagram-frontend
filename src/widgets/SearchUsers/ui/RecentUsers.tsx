import { useEffect, useState } from 'react'

import { GetUsersResponseItems } from '@/shared/api/followApi'
import { loadFromLocalStorage } from '@/shared/lib/helpers'
import { useTranslation } from '@/shared/lib/hooks'
import { Typography } from '@/shared/ui'
import { ShowUser } from '@/widgets/SearchUsers/ui/ShowUser'

import s from './SearchUsers.module.scss'

export const RecentUsers = () => {
  const { text } = useTranslation()
  const [recentRequests, setRecentRequests] = useState<GetUsersResponseItems[]>([])

  useEffect(() => {
    const storedRequests = loadFromLocalStorage('recentSearch', [])

    setRecentRequests(storedRequests)
  }, [])

  return (
    <div className={s.recentUsers}>
      <Typography variant={'boldText16'}>{text.pages.searchUsers.recent}</Typography>

      {recentRequests.length === 0 ? (
        <div className={s.text}>
          <Typography variant={'boldText14'}>{text.pages.searchUsers.emptyOne}</Typography>
          <Typography variant={'smallText'}>{text.pages.searchUsers.emptyTwo}</Typography>
        </div>
      ) : (
        <div>
          {recentRequests.map(user => (
            <ShowUser key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  )
}
