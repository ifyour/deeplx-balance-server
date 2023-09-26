export default defineEventHandler(async (event) => {
  const urls = useRuntimeConfig(event).URLS?.split?.(',') ?? []

  if (urls.filter(Boolean).length === 0) {
    return createError({ status: 500, message: '.env urls not set.' })
  }

  const randomUrl = urls[Math.floor(Math.random() * urls.length)]

  return await $fetch(randomUrl, { body: await readBody(event), method: 'post' })

})
