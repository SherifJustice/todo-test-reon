import React from 'react'

import SummaryItem from './SummaryItem'
import { ITodo } from '../../models/ITodo'

const Summary = ({ todos }: { todos: ITodo[] }) => {
	const total = todos.length
	const pending = todos.filter((todo) => todo.done === false).length
	const done = todos.filter((todo) => todo.done === true).length
	return (
		<>
			<div className="flex justify-between">
				<SummaryItem itemName={'Итого'} itemValue={total} />
				<SummaryItem itemName={'В процессе..'} itemValue={pending} />
				<SummaryItem itemName={'Готово'} itemValue={done} />
			</div>
		</>
	)
}

export default Summary
