export default defineEventHandler(async (event) => {
  const urls = useRuntimeConfig(event).URLS?.split?.(',') ?? []
  const randomUrl = urls[Math.floor(Math.random() * urls.length)]
  try {
    if (!randomUrl) {
      throw InternalError('.env URLS not set')
    }
    return await $fetch(randomUrl, { body: await readBody(event), method: 'post' })
  } catch (error) {
    const { statusCode, message } = error;
    throw createError({ statusCode, message })
  }
})
