import { useState } from 'react'

import { PictureMessageIcon, VoiceMessageIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { Input, Typography } from '@/shared/ui'

import s from './Chat.module.scss'

export const Chat = () => {
  const { text } = useTranslation()
  const t = text.pages.messenger.chat
  const [newMsg, setNewMsg] = useState('')
  const [messages, setMessages] = useState([])

  const onNewMsgChange = (text: string) => {
    setNewMsg(text)
  }

  return (
    <div className={s.chatWrapper}>
      <div className={s.chat}>
        {!messages.length && (
          <Typography className={s.emptyChat} variant={'mediumText14'}>
            {t.noChosenChat}
          </Typography>
        )}
      </div>
      <div className={s.inputWrapper}>
        <Input
          onValueChange={onNewMsgChange}
          placeholder={t.input.placeholder}
          type={'text'}
          value={newMsg}
        />
        <div className={s.inputActions}>
          {newMsg ? (
            <Typography className={s.inputSend} variant={'boldText16'}>
              {t.input.action}
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
