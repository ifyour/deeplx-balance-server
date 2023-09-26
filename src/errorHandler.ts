import type { NitroErrorHandler } from 'nitropack'

export default <NitroErrorHandler>function (error, event) {
  const { statusCode, statusMessage, message } = error

  const response = {
    code: statusCode,
    message: message || statusMessage
  }

  event.node.res.writeHead(statusCode, { 'Content-Type': 'application/json' })
  event.node.res.end(JSON.stringify(response))
}
