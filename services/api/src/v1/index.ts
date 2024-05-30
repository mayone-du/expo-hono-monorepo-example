import type { Bindings } from './types'
import { Hono } from 'hono'

const v1api = new Hono<{ Bindings: Bindings }>().basePath('/v1').get('/hello', (c) => {
  return c.json({
    foo: 'Hello, World!',
  })
})

export { v1api }
