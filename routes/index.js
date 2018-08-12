import { login, register, users } from '../collections/user'
import KoaRouter from 'koa-router'
const router = new KoaRouter()

router.get('/users', users)
router.post('/login', login)
router.post('/register', register)

export default router
