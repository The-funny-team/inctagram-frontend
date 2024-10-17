import { ACCESS_TOKEN } from '@/shared/const'
import { Socket, io } from 'socket.io-client'

class SocketApi {
  static socket: Socket | null = null

  static createConnection() {
    const accessToken = localStorage.getItem(ACCESS_TOKEN)?.replace(/"/g, '') || ''
    const queryParams = {
      query: {
        accessToken: accessToken,
      },
    }

    this.socket = io('https://inctagram.work', queryParams)

    this.socket.on('connect', () => {
      console.log('ws:connect')
    })

    this.socket.on('disconnect', e => {
      console.log('ws:disconnect', e)
    })
  }
}
export default SocketApi
