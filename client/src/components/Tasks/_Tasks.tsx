import React from 'react'

import TaskItem from './TaskItem'
import { Task } from '../../App'

const Tasks = ({
	tasks,
	toggleDone,
	handleDelete,
}: {
	tasks: Task[]
	toggleDone: (id: string, done: boolean) => void
	handleDelete: (id: string) => void
}) => {
	return (
		<div className="flex flex-col gap-2">
			{tasks.length ? (
				tasks.map((task) => (
					<TaskItem
						key={task.id}
						name={task.name}
						body={task.body}
						done={task.done}
						id={task.id}
						toggleDone={toggleDone}
						handleDelete={handleDelete}
					/>
				))
			) : (
				<span className="text-blue-100">Задач ещё нет!</span>
			)}
		</div>
	)
}

export default Tasks
