import React, { FormEvent, useState } from 'react'

const InputContainer = ({
	handleSubmit,
}: {
	handleSubmit: (
		e: FormEvent<HTMLFormElement>,
		value: string,
		descr: string
	) => void
}) => {
	const [newTaskName, setNewTaskName] = useState('')
	const [taskDescription, setTaskDescription] = useState('')

	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={(e) => {
				handleSubmit(e, newTaskName, taskDescription)
				setNewTaskName('')
				setTaskDescription('')
			}}
		>
			<div className="flex flex-col">
				<label className="text-white">Введите название задачи</label>
				<input
					type="text"
					placeholder="Название задачи"
					className="p-1 my-2 rounded-sm border-2 border-solid hover:border-slate-500"
					value={newTaskName}
					onChange={(e) => setNewTaskName(e.target.value)}
				/>
				<label className="text-white">Введите описание задачи</label>
				<input
					type="text"
					placeholder="Описание задачи"
					className="p-1 my-2 rounded-sm border-2 border-solid hover:border-slate-500"
					value={taskDescription}
					onChange={(e) => setTaskDescription(e.target.value)}
				/>
			</div>
			<button
				disabled={newTaskName ? false : true}
				type="submit"
				className="bg-blue-100 rounded-lg hover:bg-blue-200 p-1"
			>
				Добавить задачу
			</button>
		</form>
	)
}

export default InputContainer
