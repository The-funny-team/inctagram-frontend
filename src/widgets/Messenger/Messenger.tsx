import { useState } from 'react'

import { useTranslation } from '@/shared/lib/hooks'
import { ChatHeader, Typography } from '@/shared/ui'
import { Chat } from '@/widgets/Messenger/Chat/Chat'

import s from './Messenger.module.scss'

import { SearchChats } from './SearchChats'

export const Messenger = () => {
  const { text } = useTranslation()
  const t = text.pages.messenger
  const [currentUserId, setCurrentUserId] = useState<number>(0)
  const [userName, setUserName] = useState<string>('')
  const [avatarUrl, setAvatarUrl] = useState<string>('')

  return (
    <div className={s.messengerWrapper}>
      <Typography className={s.messengerTitle} variant={'h1'}>
        {t.title}
      </Typography>
      <div className={s.messenger}>
        <SearchChats
          setAvatarUrl={setAvatarUrl}
          setCurrentUserId={setCurrentUserId}
          setUserName={setUserName}
        />
        <div className={s.messengerContent}>
          <ChatHeader avatarUrl={avatarUrl} userName={userName} />
          <Chat avatarUrl={avatarUrl} currentUserId={currentUserId} userName={userName} />
        </div>
      </div>
    </div>
  )
}
