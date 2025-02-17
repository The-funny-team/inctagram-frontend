import { MessageStatus, MessageViewModel } from '@/shared/api/messengerApi'
import { DeliverIcon, SentIcon } from '@/shared/assets'
import { Avatar, Typography } from '@/shared/ui'
import { clsx } from 'clsx'

import s from './Message.module.scss'

type PropsType = {
  avatarUrl?: string
  currentUserId: number
  message: MessageViewModel
  userName: string
}
export const Message = ({ avatarUrl, currentUserId, message, userName }: PropsType) => {
  const classNames = {
    friendMessage: clsx(s.message, s.friend),
    myMessage: clsx(s.message, s.personal),
  }
  const isMyMessage = message.receiverId === currentUserId

  return (
    <div className={s.messageWrapper}>
      {!isMyMessage && <Avatar size={36} src={avatarUrl} userName={userName} />}
      <div className={clsx(isMyMessage ? classNames.myMessage : classNames.friendMessage)}>
        <Typography variant={'regularText14'}>{message.messageText}</Typography>
        <div className={s.messageTime}>
          <Typography className={clsx(isMyMessage ? s.myTime : s.friendTime)} variant={'smallText'}>
            {message.updatedAt}
          </Typography>
          {isMyMessage && message.status === MessageStatus.SENT && <SentIcon />}
          {isMyMessage && message.status === MessageStatus.READ && <DeliverIcon />}
        </div>
      </div>
    </div>
  )
}
