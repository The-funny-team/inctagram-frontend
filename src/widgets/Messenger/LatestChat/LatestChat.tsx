import { useEffect, useState } from 'react'

import { MessageViewDto } from '@/shared/api/messengerApi'
import { Avatar, Typography } from '@/shared/ui'
import { format, parseISO } from 'date-fns'

import s from './LatestChat.module.scss'

type PropsType = {
  isMyMsg: boolean
  latestChatData: MessageViewDto
  setAvatarUrl: (avatarUrl: string) => void
  setCurrentUserId: (currentUserId: number) => void
  setUserName: (userName: string) => void
}

export const LatestChat = ({
  isMyMsg,
  latestChatData,
  setAvatarUrl,
  setCurrentUserId,
  setUserName,
}: PropsType) => {
  const [msgTime, setMsgTime] = useState<null | string>(null)

  useEffect(() => {
    const date = parseISO(latestChatData.createdAt)

    setMsgTime(format(date, 'HH:mm'))
  }, [latestChatData.createdAt])

  if (!latestChatData) {
    return null
  }
  const chooseUser = () => {
    setCurrentUserId(latestChatData.receiverId)
    setUserName(latestChatData.userName)
    setAvatarUrl(latestChatData.avatars[0]?.url)
  }

  return (
    <div className={s.latestChatWrapper} onClick={chooseUser}>
      <Avatar
        size={48}
        src={latestChatData.avatars[0]?.url || ''}
        userName={latestChatData.userName}
      />
      <div className={s.latestChatInfo}>
        <div className={s.latestChatData}>
          <Typography variant={'regularText14'}>{latestChatData.userName}</Typography>
          <Typography className={s.latestChatTime} variant={'smallText'}>
            {msgTime}
          </Typography>
        </div>
        <Typography className={s.latestChatText} variant={'smallText'}>
          {isMyMsg && (
            <Typography as={'span'} className={s.latestChatText} variant={'smallText'}>
              You:&nbsp;
            </Typography>
          )}
          {latestChatData.messageText}
        </Typography>
      </div>
    </div>
  )
}
