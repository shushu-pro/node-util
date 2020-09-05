import net from 'net'

export default function getPortUnused (port = 8080) {
  const server = net.createServer()
  server.on('error', () => { })

  do {
    server.listen(port)
    if (server.listening) {
      server.close()
      return port
    }
  } while (++port < 65535)
}
