import { GetUsersResponseItems } from '@/shared/api/followApi'
import { ROUTES_URL } from '@/shared/const'
import { loadFromLocalStorage, saveToLocalStorage } from '@/shared/lib/helpers'
import { Avatar, Typography } from '@/shared/ui'
import { useRouter } from 'next/router'

import s from './ShowUser.module.scss'

type Props = {
  user: GetUsersResponseItems
}
export const ShowUser = ({ user }: Props) => {
  const router = useRouter()
  const onClickHandler = () => {
    const recentRequests: GetUsersResponseItems[] = loadFromLocalStorage('recentSearch', [])
    const isUserAlreadyAdded = recentRequests.some(u => u.id === user.id)

    if (!isUserAlreadyAdded) {
      const updatedUsers = [user, ...recentRequests].slice(0, 10)

      saveToLocalStorage('recentSearch', updatedUsers)
    }
    void void router.push(`${ROUTES_URL.PUBLIC_PROFILE}/${user.id}`)
  }

  return (
    <div className={s.rootShowUser} onClick={onClickHandler}>
      <Avatar size={48} src={user.avatars[0]?.url} userName={user.userName} />
      <div className={s.info}>
        <Typography variant={'boldText16'}>{user.userName}</Typography>
        <Typography variant={'regularText14'}>
          {user.firstName} {user.lastName}
        </Typography>
      </div>
    </div>
  )
}
