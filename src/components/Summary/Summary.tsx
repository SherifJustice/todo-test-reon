import SummaryItem from './SummaryItem'
import { Task } from '../../App'

const Summary = ({ tasks }: { tasks: Task[] }) => {
	const total = tasks.length
	const pending = tasks.filter((task) => task.done === false).length
	const done = tasks.filter((task) => task.done === true).length
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
