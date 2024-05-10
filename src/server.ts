import type { SocketIO } from '@/models/interface'
import startServer from './services/express'
import { showMsg } from './utils/errors'

const port = 5000

export default class Server implements SocketIO {
  constructor() {}

  start() {
    showMsg({ msg: 'Server started', type: 'info' })
    startServer({ port })
  }
  stop(): void {}

  send(data: string): void {}

  receive(data: string): void {}

  log(data: string): void {}
}
