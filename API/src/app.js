/* Dependencies  */
const Koa = require('koa')
const koaBody = require('koa-body')
const helmet = require('koa-helmet')
const cors = require('@koa/cors')
/* Koa  */
const app = new Koa()

/* Middleware */
app.use(koaBody())
app.use(helmet())
app.use(cors())

/* Routers */
const userRoutes = require('./routes/users.routes')

/* set routes */
app.use(userRoutes.routes()).use(userRoutes.allowedMethods())
app.use(async ctx => (ctx.body = 'Hello World'))


module.exports = app


