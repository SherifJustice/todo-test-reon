import { Router } from 'express'
import todoListController from '../controllers/todoListController.js'

const router = new Router()

router.post('/', todoListController.create)
router.get('/', todoListController.getAll)
router.put('/', todoListController.update)
router.delete('/', todoListController.remove)

export default router
