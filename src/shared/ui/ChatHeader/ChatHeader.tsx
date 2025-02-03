import { Avatar, Typography } from '@/shared/ui'

import s from './ChatHeader.module.scss'

type PropsType = {
  avatarUrl?: null | string
  userName?: null | string
}

export const ChatHeader = ({ avatarUrl, userName }: PropsType) => {
  return (
    <div className={s.headerWrapper}>
      {userName && avatarUrl && (
        <div className={s.userInfo}>
          <Avatar size={48} src={avatarUrl} userName={userName} />
          <Typography>{userName}</Typography>
        </div>
      )}
    </div>
  )
}
