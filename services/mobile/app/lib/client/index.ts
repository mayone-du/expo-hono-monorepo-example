import type { AppType } from 'api'
// https://github.com/honojs/hono/issues/1773
const { hc } = require('hono/dist/client') as typeof import('hono/client')

export const honoClient = hc<AppType>('http://localhost:8787')
// export const honoClient = hc<AppType>('http://PUT_YOUR_PRIVATE_IP:8787')

