import { MessageStatus } from '@/shared/api/messengerApi'
import { DeliverIcon, SentIcon } from '@/shared/assets'
import { Avatar, Typography } from '@/shared/ui'
import { clsx } from 'clsx'

import s from './Message.module.scss'

type PropsType = {
  avatarUrl?: string
  isMyMessage: boolean
  messageTime: string
  messageTxt: string
  status: MessageStatus
  userName: string
}
export const Message = ({
  avatarUrl,
  isMyMessage,
  messageTime,
  messageTxt,
  status,
  userName,
}: PropsType) => {
  const classNames = {
    friendMessage: clsx(s.message, s.friend),
    myMessage: clsx(s.message, s.personal),
  }

  return (
    <div className={s.messageWrapper}>
      {!isMyMessage && <Avatar size={36} src={avatarUrl} userName={userName} />}
      <div className={clsx(isMyMessage ? classNames.myMessage : classNames.friendMessage)}>
        <Typography variant={'regularText14'}>{messageTxt}</Typography>
        <div className={s.messageTime}>
          <Typography className={clsx(isMyMessage ? s.myTime : s.friendTime)} variant={'smallText'}>
            {messageTime}
          </Typography>
          {isMyMessage && status === MessageStatus.SENT && <SentIcon />}
          {isMyMessage && status === MessageStatus.READ && <DeliverIcon />}
        </div>
      </div>
    </div>
  )
}
