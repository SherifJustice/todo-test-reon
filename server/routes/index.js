import { Router } from 'express'
import todoRoutes from './todoRoutes.js'
import todoListRoutes from './todoListRoutes.js'

const router = new Router()

router.use('/todo', todoRoutes)
router.use('/todolist', todoListRoutes)

export default router
