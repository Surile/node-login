/**
 * 统一封装 result 返回
 */

module.exports = async (ctx, next) => {
  try {
    await next()
    switch (ctx.status) {
      case 400:
        ctx.status = 400
        ctx.body = {code: 400, data: ctx.body || '获取数据失败'}
        break
      case 404:
        ctx.status = 404
        ctx.body = {
          code: 404,
          message: '不存在该接口',
          content: {method: ctx.method, host: ctx.host, url: ctx.originalUrl}
        }
        break
      default:
        ctx.body = {code: 200, data: ctx.body || '失败'}
        break
    }
  } catch (e) {
    ctx.status = 500
    ctx.body = {code: 500, message: e.message}
  }
}
