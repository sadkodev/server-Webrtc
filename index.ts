import Server from '@/server'

const server = new Server()

try {
  server.start()
} catch (error) {
  console.error(error)
}
