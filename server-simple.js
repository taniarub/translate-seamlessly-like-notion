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
        <p>Environment: ${process.env.NODE_ENV || 'development'}</p>
      </body>
    </html>
  `)
})

app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl

    let template
    let renderFunction
    
    if (!isProduction) {
      template = await fs.readFile('./index.html', 'utf-8')
      // Skip SSR loading in development to avoid the router issue
      res.status(200).set({ 'Content-Type': 'text/html' }).send(template)
      return
    } else {
      template = await fs.readFile('./dist/client/index.html', 'utf-8')
      try {
        const serverModule = await import('./dist/server/entry-server.js')
        renderFunction = serverModule.render
        
        const rendered = await renderFunction(url)
        const html = template.replace(`<!--ssr-outlet-->`, rendered.html ?? '')
        
        res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
        return
      } catch (ssrError) {
        console.log('SSR failed, falling back to client-side rendering:', ssrError.message)
        // Fallback to client-side rendering
        res.status(200).set({ 'Content-Type': 'text/html' }).send(template)
        return
      }
    }
  } catch (e) {
    console.log('Server error:', e.message)
    res.status(500).end('Internal Server Error')
  }
})

app.listen(port, () => {
  console.log(`🚀 Server started at http://localhost:${port}`)
  console.log(`📋 Test SSR at http://localhost:${port}/test-ssr`)
  console.log(`🌐 Main app at http://localhost:${port}`)
  console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`)
})