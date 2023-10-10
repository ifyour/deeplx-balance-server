export default defineEventHandler(async (event) => {
  const urls = useRuntimeConfig(event).URLS?.split?.(',') ?? []

  if (urls.filter(Boolean).length === 0) {
    return createError({ status: 500, message: '.env urls not set.' })
  }

  if (!urls.some(url => url.endsWith('/translate'))) {
    return createError({ status: 500, message: 'DeepLx URL format error, expected format: http(s)://example.com/translate' })
  }

  const randomUrl = urls[Math.floor(Math.random() * urls.length)]

  return await $fetch(randomUrl, { body: await readBody(event), method: 'post' })

})
