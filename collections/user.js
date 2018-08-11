import UserModel from '../schema/UserSchema'
import crypto from 'crypto'
import jsonwebtoken from 'jsonwebtoken'
const md5 = crypto.createHash('md5')
const secret = 'node-login'

const users = async (ctx) => {
  // const payload = getJWTPayload(ctx.headers.authorization)
  await UserModel.find((err, res) => {
    console.log(err)
    ctx.body = {
      data: {
        res
      }
    }
  })
}
const register = async (ctx) => {
  const { body } = ctx.request
  if (!body.name && !body.password) {
    ctx.statsu = 400
    ctx.body = {
      error: '用户名和密码不能为空'
    }
    return
  }
  body.password = md5.update(body.password).digest('hex')
  let user = await UserModel.find({name: body.name})
  let email = await UserModel.find({email: body.email})
  if (!user.length && !email.length) {
    const { name, email, password } = body
    const createUser = {
      name,
      email,
      password
    }
    const reslut = await UserModel.create(createUser)
    ctx.status = 400
    ctx.body = {
      message: '注册成功',
      reslut
    }
  } else {
    ctx.status = 406
    ctx.body = {
      message: '用户名或邮箱已经存在'
    }
  }
}
const login = async (ctx) => {
  const { body } = ctx.request
  const findUser = await UserModel.findOne({name: body.name})
  console.log(findUser)
  if (!findUser) {
    ctx.status = 401
    ctx.body = {
      message: '用户名错误'
    }
    return
  }
  body.password = md5.update(body.password).digest('hex')
  if (body.password === findUser.password) {
    ctx.status = 400
    ctx.body = {
      message: '登录成功',
      data: {
        findUser,
        token: getToken({ name: body.name, password: body.password })
      }
    }
  } else {
    ctx.status = 401
    ctx.body = {
      message: '密码错误'
    }
  }
}

function getToken (payload = {}) {
  return jsonwebtoken.sign(payload, secret, { expiresIn: '4h' })
}

export {
  users,
  register,
  login
}
