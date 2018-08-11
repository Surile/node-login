import { users } from '../collections/user'
import KoaRouter from 'koa-router'
const router = new KoaRouter()

router.get('/users', users)

export default router
