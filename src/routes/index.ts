export default eventHandler((event) => {
  event.node.res.writeHead(404, { 'Content-Type': 'application/json' })
  event.node.res.end(
    JSON.stringify({ success: false, message: "page not found" }),
  )
})
