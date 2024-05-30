import { v1api } from './v1'
import { Hono } from 'hono'

const app = new Hono()

const routes = app.route('/', v1api)

export type AppType = typeof routes

export default app
