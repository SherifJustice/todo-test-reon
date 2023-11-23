import React, { useState } from 'react'

const TaskItem = ({
	name,
	body,
	done,
	id,
	toggleDone,
	handleDelete,
}: {
	name: string
	body: string
	done: boolean
	id: string
	toggleDone: (id: string, done: boolean) => void
	handleDelete: (id: string) => void
}) => {
	const [toggleDescription, settoggleDescription] = useState(false)
	return (
		<>
			<div className="flex justify-between items-center bg-white p-1 px-3 rounded-sm">
				<div className="flex gap-2 ">
					<input
						type="checkbox"
						checked={done}
						onChange={() => toggleDone(id, !done)}
					/>
					<span
						className="cursor-pointer "
						onClick={() => settoggleDescription((prev) => !prev)}
					>
						{name}
					</span>
				</div>
				<div className="flex items-end">
					<button
						type="button"
						// onClick={}
						className="bg-blue-200 hover:bg-blue-300 rounded-lg p-1 h-9 w-17"
					>
						Редактировать
					</button>
					<button
						type="button"
						onClick={() => handleDelete(id)}
						className="bg-blue-200 hover:bg-blue-300 rounded-lg p-1 h-9 w-17 px-3 ml-3"
					>
						Удалить
					</button>
				</div>
			</div>
			{toggleDescription && body ? (
				<div className=" py-2 mt-0 w-full px-3 bg-white rounded-sm">{body}</div>
			) : (
				''
			)}
		</>
	)
}

export default TaskItem
