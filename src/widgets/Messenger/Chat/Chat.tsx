import { useState } from 'react'

import { PictureMessageIcon, VoiceMessageIcon } from '@/shared/assets'
import { Input, Typography } from '@/shared/ui'

import s from './Chat.module.scss'
import { useTranslation } from '@/shared/lib/hooks'

export const Chat = () => {
  const { text } = useTranslation()
  const t = text.pages.messenger.chat.input
  const [newMsg, setNewMsg] = useState('')

  const onNewMsgChange = (text: string) => {
    setNewMsg(text)
  }

  return (
    <div className={s.chatWrapper}>
      <div className={s.chat}></div>
      <div className={s.inputWrapper}>
        <Input
          onValueChange={onNewMsgChange}
          placeholder={t.placeholder}
          type={'text'}
          value={newMsg}
        />
        <div className={s.inputActions}>
          {newMsg ? (
            <Typography className={s.inputSend} variant={'boldText16'}>
              {t.action}
            </Typography>
          ) : (
            <div className={s.inputIcons}>
              <VoiceMessageIcon />
              <PictureMessageIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
