import fs from 'node:fs/promises'
import express from 'express'
import compression from 'compression'
import sirv from 'sirv'

const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

const app = express()

app.use(compression())

if (isProduction) {
  app.use(sirv('./dist/client', { extensions: [] }))
}

// Simple test route to verify SSR is working
app.get('/test-ssr', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>SSR Test</title></head>
      <body>
        <h1>Server-Side Rendering is working!</h1>
        <p>This page was rendered on the server at ${new Date().toISOString()}</p>
      </body>
    </html>
  `)
})

app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl

    let template
    let render
    if (!isProduction) {
      const { createServer } = await import('vite')
      const vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom'
      })
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
    } else {
      template = await fs.readFile('./dist/client/index.html', 'utf-8')
      render = (await import('./dist/server/entry-server.js')).render
    }

    const rendered = await render(url)

    const html = template
      .replace(`<!--ssr-outlet-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (e) {
    console.log('SSR Error:', e.message)
    // Fallback to regular index.html
    if (!isProduction) {
      const template = await fs.readFile('./index.html', 'utf-8')
      res.status(200).set({ 'Content-Type': 'text/html' }).send(template)
    } else {
      const template = await fs.readFile('./dist/client/index.html', 'utf-8')
      res.status(200).set({ 'Content-Type': 'text/html' }).send(template)
    }
  }
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
  console.log(`Test SSR at http://localhost:${port}/test-ssr`)
})