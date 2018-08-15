import { login, register, users } from '../collections/user'
import KoaRouter from 'koa-router'
const apiRoutes = new KoaRouter()

apiRoutes.get('/users', users)
apiRoutes.post('/login', login)
apiRoutes.post('/register', register)

export default apiRoutes
