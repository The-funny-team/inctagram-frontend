import { useTranslation } from '@/shared/lib/hooks'
import { Typography } from '@/shared/ui'

import s from './Messenger.module.scss'

export const Messenger = () => {
  const { text } = useTranslation()
  const t = text.pages.messenger

  return (
    <div className={s.messengerWrapper}>
      <Typography variant={'h1'}>{t.title}</Typography>
    </div>
  )
}
