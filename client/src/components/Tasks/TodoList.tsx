/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'

import TodoItem from './TodoItem'
import { ITodo } from '../../models/ITodo'
import { todoAPI } from '../../services/TodoService'
import Container from '../Container'
import Summary from '../Summary/Summary'
import InputContainer from '../../ui/Input'

const TodoList = () => {
	const {
		data: todos,
		isLoading,
		error: fetchAllTodoError,
	} = todoAPI.useFetchAllTodoQuery()
	const [createTodo] = todoAPI.useCreateTodoMutation()
	const [removeTodo] = todoAPI.useRemoveTodoMutation()

	const handleSubmit = async (
		e: React.FormEvent,
		title: string,
		descr: string
	) => {
		try {
			e.preventDefault()
			await createTodo({
				title: title,
				description: descr,
				done: false,
				date: new Date().toLocaleDateString('en-GB'),
			})
		} catch (error) {
			alert(error)
		}
	}

	const handleRemoveTodo = async (todo: ITodo) => {
		await removeTodo(todo)
	}

	const sortedTasks = [...todos]?.sort((a, b) => b.id - a.id)

	return (
		<div className="flex flex-col gap-2">
			<Container title={'Общая информация'}>
				{todos ? <Summary todos={todos} /> : <h2>Please stand by</h2>}
			</Container>
			<Container>
				<InputContainer btnText="Добавить задачу" handleSubmit={handleSubmit} />
			</Container>
			{fetchAllTodoError && (
				<div className="text-red text-xl">
					'Something wrong.. Please, try again later..'
				</div>
			)}
			{!isLoading ? (
				sortedTasks?.map((todo: ITodo) => (
					<TodoItem key={todo.title} todo={todo} remove={handleRemoveTodo} />
				))
			) : (
				<span className="text-blue-100">Задач ещё нет!</span>
			)}
		</div>
	)
}

export default TodoList
