import { useEffect, useState } from 'react'

import { MessageViewModel } from '@/shared/api/messengerApi'
import SocketApi from '@/shared/api/socket-api'

export enum SocketEvent {
  ERROR = 'error',
  MESSAGE_DELETED = 'message-deleted',
  MESSAGE_SENT = 'message-sent',
  NOTIFICATIONS = 'notifications',
  RECEIVE_MESSAGE = 'receive-message',
  UPDATE_MESSAGE = 'update-message',
}

export const useConnectSocket = () => {
  const [notifications, setNotifications] = useState()
  const [message, setMessage] = useState<MessageViewModel>()
  const [error, setError] = useState('')
  const connectSocket = () => {
    SocketApi.createConnection()

    SocketApi.socket?.on(SocketEvent.NOTIFICATIONS, (data: any) => {
      setNotifications(data)
    })

    SocketApi.socket?.on(SocketEvent.RECEIVE_MESSAGE, (data: MessageViewModel) => {
      setMessage(data)
    })
    SocketApi.socket?.on(SocketEvent.MESSAGE_SENT, (data: any) => {
      setMessage(data)
    })

    SocketApi.socket?.on(SocketEvent.ERROR, (data: any) => {
      setError(JSON.stringify(data))
    })
  }

  useEffect(() => {
    connectSocket()
  }, [])

  return { error, message, notifications }
}
