export default defineEventHandler(async (event) => {
  const urls = useRuntimeConfig(event)?.URLS?.split?.(',') ?? []

  const randomUrl = urls[Math.floor(Math.random() * urls.length)]

  try {

    if (urls.length === 0) {
      throw createError({ statusCode: 500, message: '.env URLS not set' })
    }

    return await $fetch(randomUrl, { body: await readBody(event), method: 'post' })

  } catch ({ statusCode, message }) {

    event.node.res.writeHead(statusCode, { 'Content-Type': 'application/json' })

    event.node.res.end(JSON.stringify({ statusCode, message }))
  }
})
