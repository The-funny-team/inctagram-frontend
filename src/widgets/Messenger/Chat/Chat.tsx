import { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { SocketEvent, useConnectSocket } from '@/shared/api/hooks/useConnectSocket'
import { MessageViewModel, useGetMessagesByUserQuery } from '@/shared/api/messengerApi'
import SocketApi from '@/shared/api/socket-api'
import { PictureMessageIcon, VoiceMessageIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { Input, Message, ScrollArea, Typography } from '@/shared/ui'

import s from './Chat.module.scss'

type Props = {
  avatarUrl: string
  currentUserId: number
  userName: string
}

export const Chat = ({ avatarUrl, currentUserId, userName }: Props) => {
  const { text } = useTranslation()
  const t = text.pages.messenger.chat
  const chatRef = useRef<HTMLDivElement | null>(null)
  const [newMsg, setNewMsg] = useState('')
  const [messages, setMessages] = useState<MessageViewModel[]>([])
  const [currentMessageId, setCurrentMessageId] = useState(0)
  const [loading, setLoading] = useState(false)
  const [totalCount, setTotalCount] = useState<number>(0)

  const onNewMsgChange = (text: string) => {
    setNewMsg(text)
  }
  const { data: currentMessages } = useGetMessagesByUserQuery(
    {
      cursor: currentMessageId,
      dialoguePartnerId: currentUserId,
      pageSize: 7,
    },
    { skip: currentUserId === 0 }
  )
  const { message: newMessage } = useConnectSocket()

  useEffect(() => {
    if (currentMessages && currentMessages?.items.length > 0) {
      setTotalCount(currentMessages.totalCount)
      setMessages(prevState => [...prevState, ...currentMessages.items])
      setLoading(false)
    }
  }, [currentMessages])

  useEffect(() => {
    if (newMessage) {
      setMessages(prevState => [newMessage, ...prevState])
      scrollToBottom()
    }
  }, [newMessage])

  const fetchMoreChats = () => {
    setLoading(true)

    if (messages.length >= totalCount) {
      return
    }

    const firstMessageId = messages[0]?.id || 0

    setCurrentMessageId(firstMessageId)

    const chat = chatRef.current
    const scrollPosition = chat ? chat.scrollHeight - chat.scrollTop : 0

    setTimeout(() => {
      if (chat) {
        chat.scrollTop = chat.scrollHeight - scrollPosition
      }
    }, 100)
  }

  const sentMessageHandler = () => {
    SocketApi.socket?.emit(SocketEvent.RECEIVE_MESSAGE, {
      message: newMsg,
      receiverId: currentUserId,
    })
    setNewMsg('')
  }
  const scrollToBottom = () => {
    setTimeout(() => {
      chatRef.current?.scrollTo({ behavior: 'smooth', top: chatRef.current.scrollHeight })
    }, 300)
  }

  return (
    <div className={s.chatWrapper}>
      <ScrollArea>
        <InfiniteScroll
          dataLength={messages.length}
          endMessage={
            <div style={{ margin: '10px 0', textAlign: 'center' }}>
              <Typography variant={'regularText14'}>{text.pages.messenger.noMoreChats}</Typography>
            </div>
          }
          hasMore={messages.length <= totalCount}
          key={messages.length}
          loader={
            loading && (
              <div style={{ margin: '10px 0', textAlign: 'center' }}>
                <Typography variant={'regularText14'}>
                  {text.pages.messenger.loadingChats}
                </Typography>
              </div>
            )
          }
          next={fetchMoreChats}
        >
          <div className={s.chat} ref={chatRef}>
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
        </InfiniteScroll>
      </ScrollArea>

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
