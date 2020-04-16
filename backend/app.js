const Koa = require('koa')
const logger = require('koa-logger')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
require('dotenv').config({ path: __dirname + '/.env' })


const app = new Koa()

// log all events to the terminal
app.use(logger())

// Error handling middleware
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

app.use(bodyParser())

// routing
const router = new Router()
const apiRouter = new Router({
  prefix: process.env.BASE_URL || '/api/v1/db'
})

// Hello World route
require('./routes/basic')({ router })
// API route
require('./routes/api')({ apiRouter })

// tells the router to use all the routes
app.use(router.routes())
app.use(router.allowedMethods())

app.use(apiRouter.routes())
app.use(apiRouter.allowedMethods())

// Run the server on port 3000 || PORT on ENV
const server = app.listen(process.env.BACKEND_PORT || 3000)
console.log(`running server on http://localhost:${process.env.BACKEND_PORT ? process.env.BACKEND_PORT : '3000'}`)
console.log(`\tAPI Endpoint http://localhost:${process.env.BACKEND_PORT ? process.env.BACKEND_PORT : '3000'}${process.env.BASE_URL || '/api/v1/db'}`)
module.exports = server
