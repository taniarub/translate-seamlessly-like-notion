import fs from 'node:fs/promises'
import express from 'express'
import compression from 'compression'
import sirv from 'sirv'

const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000
const base = process.env.BASE || '/'

let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  })
}

const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''

let ssrManifest
if (isProduction) {
  try {
    ssrManifest = await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  } catch (e) {
    console.log('SSR manifest not found, continuing without it')
    ssrManifest = undefined
  }
}

const app = express()

app.use(compression())

if (isProduction) {
  app.use(base, sirv('./dist/client', { extensions: [] }))
} else {
  app.use(vite.ssrFixStacktrace)
  app.use(base, vite.middlewares)
}

app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')

    let template
    let render
    if (!isProduction) {
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    const rendered = await render(url, ssrManifest)

    const html = template
      .replace(`<!--ssr-outlet-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (e) {
    if (!isProduction && vite) {
      vite.ssrFixStacktrace(e)
    }
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})