
import { login, register } from '../collections/user'
import KoaRouter from 'koa-router'
const router = new KoaRouter()

router.post('/login', login)
router.post('/register', register)

export default router
