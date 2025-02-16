import { useEffect, useState } from 'react'

import { SocketEvent, useConnectSocket } from '@/shared/api/hooks/useConnectSocket'
import { MessageViewModel, useGetMessagesByUserQuery } from '@/shared/api/messengerApi'
import SocketApi from '@/shared/api/socket-api'
import { PictureMessageIcon, VoiceMessageIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { Input, Message, Typography } from '@/shared/ui'

import s from './Chat.module.scss'

type Props = {
  avatarUrl: string
  currentUserId: number
  userName: string
}

export const Chat = ({ avatarUrl, currentUserId, userName }: Props) => {
  const { text } = useTranslation()
  const t = text.pages.messenger.chat
  const [newMsg, setNewMsg] = useState('')
  const [messages, setMessages] = useState<MessageViewModel[]>([])

  const onNewMsgChange = (text: string) => {
    setNewMsg(text)
  }
  const { data: currentMessages } = useGetMessagesByUserQuery({ dialoguePartnerId: currentUserId })
  const { message: newMessage } = useConnectSocket()

  useEffect(() => {
    if (currentMessages?.items.length) {
      const newMessages = [...currentMessages.items].reverse()

      setMessages(newMessages)
    }
    if (newMessage) {
      setMessages(prevState => [...prevState, newMessage])
    }
  }, [currentMessages, newMessage])

  const sentMessageHandler = () => {
    SocketApi.socket?.emit(SocketEvent.RECEIVE_MESSAGE, {
      message: newMsg,
      receiverId: currentUserId,
    })
    setNewMsg('')
  }

  return (
    <div className={s.chatWrapper}>
      <div className={s.chat}>
        {messages && messages.length > 0 ? (
          messages.map(mes => (
            <Message
              avatarUrl={avatarUrl}
              currentUserId={currentUserId}
              key={mes.id}
              message={mes}
              userName={userName}
            />
          ))
        ) : (
          <Typography className={s.emptyChat} variant={'mediumText14'}>
            {t.noChosenChat}
          </Typography>
        )}
      </div>
      <div className={s.inputWrapper}>
        <Input
          disabled={!currentUserId}
          onValueChange={onNewMsgChange}
          placeholder={t.input.placeholder}
          type={'text'}
          value={newMsg}
        />
        <div className={s.inputActions}>
          {newMsg ? (
            <Typography className={s.inputSend} onClick={sentMessageHandler} variant={'boldText16'}>
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
