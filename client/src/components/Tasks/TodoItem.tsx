/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, FormEvent, useState } from 'react'
import { ITodo } from '../../models/ITodo'
import Modal from '../../ui/Modal'
import InputContainer from '../../ui/Input'
import { todoAPI } from '../../services/TodoService'

interface TodoItemProps {
	todo: ITodo
	remove: (todo: ITodo) => void
}

const TodoItem: FC<TodoItemProps> = ({ todo, remove }) => {
	const [updateTodo] = todoAPI.useUpdateTodoMutation()
	const [toggleDescription, settoggleDescription] = useState(false)
	const [showModal, setShowModal] = useState(false)

	const toggleDone = async () => {
		await updateTodo({ ...todo, done: !todo.done })
	}
	const handleRemove = async (event: React.MouseEvent) => {
		event.preventDefault()
		await remove(todo)
	}
	const handleUpdate = async (
		e: React.FormEvent,
		todoName: string,
		todoDescription: string
	) => {
		e.preventDefault()
		await updateTodo({ ...todo, title: todoName, description: todoDescription })
	}

	return (
		<>
			<div className="flex justify-between items-center bg-white p-1 px-3 rounded-sm">
				<div className="flex gap-2 ">
					<input type="checkbox" checked={todo.done} onChange={toggleDone} />
					<span
						className="cursor-pointer "
						onClick={() => settoggleDescription((prev) => !prev)}
					>
						{todo.title}
					</span>
				</div>
				<div className="flex items-end">
					<span className="text-sm opacity-70 text-gray-600 p-2">
						{todo.date}
					</span>
					<button
						type="button"
						onClick={() => setShowModal(true)}
						className="bg-blue-200 hover:bg-blue-300 rounded-lg p-1 h-9 w-17"
					>
						Редактировать
					</button>
					<button
						type="button"
						onClick={handleRemove}
						className="bg-blue-200 hover:bg-blue-300 rounded-lg p-1 h-9 w-17 px-3 ml-3"
					>
						Удалить
					</button>
				</div>
			</div>
			{toggleDescription && todo.description ? (
				<div className=" py-2 mt-0 w-full px-3 bg-white rounded-sm">
					{todo.description}
				</div>
			) : (
				''
			)}
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<InputContainer
						todo={todo}
						btnText="Изменить задачу"
						handleSubmit={handleUpdate}
					/>
				</Modal>
			)}
		</>
	)
}

export default TodoItem
