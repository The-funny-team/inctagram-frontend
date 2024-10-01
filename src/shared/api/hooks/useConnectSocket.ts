import { useEffect, useState } from 'react'

import SocketApi from '@/shared/api/socket-api'

enum SocketEvent {
  ERROR = 'error',
  MESSAGE_DELETED = 'message-sent',
  MESSAGE_SENT = 'message-deleted',
  NOTIFICATIONS = 'notifications',
  RECEIVE_MESSAGE = 'receive-message',
  UPDATE_MESSAGE = 'update-message',
}

export const useConnectSocket = () => {
  const [notifications, setNotifications] = useState()
  const [error, setError] = useState('')
  const connectSocket = () => {
    SocketApi.createConnection()

    SocketApi.socket?.on(SocketEvent.NOTIFICATIONS, (data: any) => {
      console.log(SocketEvent.NOTIFICATIONS, data)
      setNotifications(data)
    })

    SocketApi.socket?.on(SocketEvent.ERROR, (data: any) => {
      console.log('error', data)
      setError(JSON.stringify(data))
    })
  }

  useEffect(() => {
    connectSocket()
  }, [])

  return { error, notifications }
}
