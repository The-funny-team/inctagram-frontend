import { ACCESS_TOKEN } from '@/shared/const'
import { loadFromLocalStorage } from '@/shared/lib/helpers'
import { Socket, io } from 'socket.io-client'

class SocketApi {
  static socket: Socket | null = null

  static createConnection() {
    const accessToken = loadFromLocalStorage(ACCESS_TOKEN, '')
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
