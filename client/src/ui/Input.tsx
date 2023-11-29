import React, { useState } from 'react'
import { ITodo } from '../models/ITodo'

type Props = {
	handleSubmit: (
		e: React.FormEvent,
		todoName: string,
		todoDescription: string,
		todo?: ITodo
	) => void
	btnText: string
	todo?: ITodo
}

const InputContainer = ({ handleSubmit, btnText }: Props) => {
	const [todoName, setTodoName] = useState('')
	const [todoDescription, setTodoDescription] = useState('')

	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={(e) => {
				handleSubmit(e, todoName, todoDescription)
				setTodoName('')
				setTodoDescription('')
			}}
		>
			<div className="flex flex-col">
				<label className="text-white">Введите название задачи</label>
				<input
					type="text"
					placeholder="Название задачи"
					className="p-1 my-2 rounded-sm border-2 border-solid hover:border-slate-500"
					value={todoName}
					onChange={(e) => setTodoName(e.target.value)}
					name="title"
				/>
				<label className="text-white">Введите описание задачи</label>
				<input
					type="text"
					placeholder="Описание задачи"
					className="p-1 my-2 rounded-sm border-2 border-solid hover:border-slate-500"
					value={todoDescription}
					onChange={(e) => setTodoDescription(e.target.value)}
					name="description"
				/>
			</div>
			<button
				disabled={todoName ? false : true}
				type="submit"
				className="bg-blue-100 rounded-lg hover:bg-blue-200 p-1"
			>
				{btnText}
			</button>
		</form>
	)
}

export default InputContainer
