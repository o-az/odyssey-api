import { proxy } from 'hono/proxy'
import { HTTPException } from 'hono/http-exception'
import { apiReference } from '@scalar/hono-api-reference'

import { app } from '#setup.ts'

app.all('/proxy', (context) => {
  const scalarUrl = context.req.query('scalar_url')
  if (!scalarUrl) throw new HTTPException(400, { message: 'no URL in query parameters' })

  return proxy(decodeURIComponent(scalarUrl))
})

app
  .get('/spec', (context) => context.redirect('/swagger.yaml'))
  .get('/swagger.yml', (context) => context.redirect('/swagger.yaml'))

app.get(
  '/',
  apiReference({
    theme: 'elysiajs',
    favicon: '/icon.png',
    pageTitle: 'Odyssey OpenAPI',
    spec: { url: '/swagger.yaml' },
    proxyUrl: 'https://odyssey.evm.workers.dev/proxy',
  }),
)

export default app
