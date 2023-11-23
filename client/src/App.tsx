import React, { FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Container from './components/Container'
import Summary from './components/Summary/Summary'
import Tasks from './components/Tasks/_Tasks'
import InputContainer from './ui/Input'

export interface Task {
	name: string
	body: string
	done: boolean
	id: string
}

function App() {
	const [tasks, setTasks] = useState<Task[]>([])

	const handleSubmit = (
		e: FormEvent<HTMLFormElement>,
		title: string,
		descr: string
	) => {
		e.preventDefault()
		const newTask = {
			name: title,
			body: descr,
			done: false,
			id: uuidv4(),
		}
		setTasks((tasks) => [...tasks, newTask])
	}

	const toggleDoneTask = (id: string, done: boolean) => {
		setTasks((tasks) =>
			tasks.map((task) => {
				if (task.id === id) {
					task.done = done
				}
				return task
			})
		)
	}

	const handleDeleteTask = (id: string) => {
		setTasks((tasks) => tasks.filter((task) => task.id !== id))
	}

	return (
		<div className="container w-[680px] ml-[38rem] pt-10">
			<div className="flex flex-col items-center">
				<div className="border shadow p-10 flex flex-col gap-10">
					<Container title={'Общая информация'}>
						<Summary tasks={tasks} />
					</Container>
					<Container>
						<InputContainer handleSubmit={handleSubmit} />
					</Container>
					<Container title={'Задачи'}>
						<Tasks
							tasks={tasks}
							toggleDone={toggleDoneTask}
							handleDelete={handleDeleteTask}
						/>
					</Container>
				</div>
			</div>
		</div>
	)
}

export default App
