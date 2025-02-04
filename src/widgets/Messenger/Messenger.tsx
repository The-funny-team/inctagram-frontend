import { useTranslation } from '@/shared/lib/hooks'
import { Typography } from '@/shared/ui'

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
      <div>
        <div className={s.messengerSearch}>
          <SearchChats />
        </div>
      </div>
    </div>
  )
}
