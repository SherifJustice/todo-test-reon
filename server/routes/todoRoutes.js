import { Router } from 'express'
import todoController from '../controllers/todoController.js'

const router = new Router()

router.post('/', todoController.create)
router.get('/', todoController.getAll)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.remove)

export default router
