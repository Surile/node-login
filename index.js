import apiRoutes from './routes'
import Router from 'koa-router'
import jwt from 'koa-jwt'
import historyApiFallback from 'koa2-connect-history-api-fallback'
const Koa = require('koa')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const body = require('./middlewares/ctx_body')
const cors = require('koa2-cors')
const secret = 'node-login'

const router = new Router()

const app = new Koa()

app.use(bodyParser())
app.use(logger())
app.use(historyApiFallback())
app.use(body)
app.use(json({ pretty: false, param: 'pretty' }))
app.use(cors())
router.use('/v1', jwt({secret}).unless({
  path: [/\/register/, /\/login/]
}), apiRoutes.routes(), apiRoutes.allowedMethods()) // 所有走/api/打头的请求都需要经过jwt验证。

app.use(router.routes()) // 将路由规则挂载到Koa上。
app.use(router.allowedMethods())

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.on('error', (err, ctx) => {
  console.log('server error', err)
})

app.listen('3000', () => {
  console.log('服务器已启用，端口为3000')
})
