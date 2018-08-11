import api from './routes/api'
import Router from 'koa-router'
import jwt from 'koa-jwt'
import auth from './routes/auth'
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
app.use(body)
app.use(json({ pretty: false, param: 'pretty' }))
app.use(cors())
router.use('', auth.routes(), auth.allowedMethods()) // 所有走/api/打头的请求都需要经过jwt验证。
router.use('/api', jwt({secret}), api.routes(), api.allowedMethods()) // 所有走/api/打头的请求都需要经过jwt验证。

app.use(router.routes()) // 将路由规则挂载到Koa上。

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
