import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { csrf } from 'hono/csrf'
import { logger } from 'hono/logger'
import { timeout } from 'hono/timeout'
import { requestId } from 'hono/request-id'
import { prettyJSON } from 'hono/pretty-json'
import { HTTPException } from 'hono/http-exception'
import { getConnInfo } from 'hono/cloudflare-workers'

import wranglerJSON from '#wrangler.json'

export const app = new Hono<{ Bindings: Env }>()

app.use(csrf())
app.use(logger())
app.use('*', timeout(4_000))
/* append `?pretty` to any request to get prettified JSON */
app.use(prettyJSON({ space: 2 }))
app.use('*', requestId({ headerName: `${wranglerJSON.name}-Request-Id` }))
app.use('*', cors({ origin: '*', allowMethods: ['GET', 'OPTIONS', 'POST', 'HEAD'] }))

app.onError((error, context) => {
  const { remote } = getConnInfo(context)
  const requestId = context.get('requestId')
  console.error([`[${requestId}]`, `-[${remote.address}]`, `-[${context.req.url}]:\n`, `${error.message}`].join(''))
  if (error instanceof HTTPException) return error.getResponse()
  return context.json({ remote, error: error.message, requestId }, 500)
})

app.notFound((context) => {
  throw new HTTPException(404, {
    cause: context.error,
    message: `${context.req.url} is not a valid path.`,
  })
})
