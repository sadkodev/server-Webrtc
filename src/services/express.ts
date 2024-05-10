import express from 'express'

interface StartServer {
  port: number
  routes?: any
}

const handlerServer = (req: any, res: any) => {
  res.send('Start socket.io server')
}

const startServer = ({ port }: StartServer) => {
  const app = express({ strict: true })

  app.use('/', handlerServer)

  app.listen(port, () => {
    console.log(`Server started on port ${port}`)
  })
}

export default startServer
