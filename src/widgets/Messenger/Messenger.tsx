import { Typography } from '@/shared/ui'

import s from './Messenger.module.scss'

export const Messenger = () => {
  return (
    <div className={s.messengerWrapper}>
      <Typography variant={'h1'}>Messenger</Typography>
    </div>
  )
}
