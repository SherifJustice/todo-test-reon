import models from '../models/models.js'
import ApiError from '../error/ApiError.js'

class TodoController {
	async create(req, res, next) {
		try {
			const { title, description, todoListId, done, date } = req.body
			const todo = await models.Todo.create({
				title,
				description,
				todoListId,
				done,
				date,
			})

			return res.status(200).json(todo)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}
	async getAll(req, res, next) {
		try {
			const todos = await models.Todo.findAll()
			return res.status(200).json(todos)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}
	async update(req, res, next) {
		try {
			const { title, description, done, id } = req.body
			const result = await models.Todo.update(
				{ title: title, description: description, done: done },
				{ where: { id: id } }
			)
			return res.status(200).json({ message: 'Todo editing complete' })
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}

	async remove(req, res, next) {
		try {
			const { id } = req.body
			const deletedTodo = await models.Todo.destroy({
				where: { id: id },
			})
			return res.json('complete')
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}
}

export default new TodoController()
