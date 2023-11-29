import models from '../models/models.js'
import ApiError from '../error/ApiError.js'

class TodoListController {
	async create(req, res) {
		try {
			const { title } = req.body
			const todoList = await models.TodoList.create({ title })
			return res.json(todoList)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}
	async getAll(req, res) {
		const todoLists = await models.TodoList.findAll()
		return res.json(todoLists)
	}
	async update(req, res) {
		try {
			const { id } = req.query
			const { title } = req.body
			const result = await models.TodoList.update(
				{ title: title },
				{ where: { id: id } }
			)
			return res.status(200).json({ message: 'TodoList editing complete' })
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}
	async remove(req, res) {
		try {
			const { id } = req.query
			const deletedTodoList = await models.TodoList.destroy({
				where: { id: id },
			})
			return res.json({ message: 'TodoList deleted' })
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}
}

export default new TodoListController()
