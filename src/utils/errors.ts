export function BadRequest(message?: string) {
  return createError({ statusCode: 400, message })
}
export function NotAuthenticated(message?: string) {
  return createError({ statusCode: 401, message })
}
export function PaymentError(message?: string) {
  return createError({ statusCode: 402, message })
}
export function Forbidden(message?: string) {
  return createError({ statusCode: 403, message })
}
export function NotFound(message?: string) {
  return createError({ statusCode: 404, message })
}
export function MethodNotAllowed(message?: string) {
  return createError({ statusCode: 405, message })
}
export function NotAcceptable(message?: string) {
  return createError({ statusCode: 406, message })
}
export function Timeout(message?: string) {
  return createError({ statusCode: 408, message })
}
export function Conflict(message?: string) {
  return createError({ statusCode: 409, message })
}
export function LengthRequired(message?: string) {
  return createError({ statusCode: 411, message })
}
export function Unprocessable(message?: string) {
  return createError({ statusCode: 422, message })
}
export function TooManyRequests(message?: string) {
  return createError({ statusCode: 429, message })
}
export function InternalError(message?: string) {
  return createError({ statusCode: 500, message })
}
export function NotImplemented(message?: string) {
  return createError({ statusCode: 501, message })
}
export function BadGateway(message?: string) {
  return createError({ statusCode: 502, message })
}
export function Unavailable(message?: string) {
  return createError({ statusCode: 503, message })
}
