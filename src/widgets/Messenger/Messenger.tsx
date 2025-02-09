import { useTranslation } from '@/shared/lib/hooks'
import { ChatHeader, Typography } from '@/shared/ui'
import { Chat } from '@/widgets/Messenger/Chat/Chat'

import s from './Messenger.module.scss'

import { SearchChats } from './SearchChats'

export const Messenger = () => {
  const { text } = useTranslation()
  const t = text.pages.messenger

  return (
    <div className={s.messengerWrapper}>
      <Typography className={s.messengerTitle} variant={'h1'}>
        {t.title}
      </Typography>
      <div className={s.messenger}>
        <SearchChats />
        <div className={s.messengerContent}>
          <ChatHeader />
          <Chat />
        </div>
      </div>
    </div>
  )
}
