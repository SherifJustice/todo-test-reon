import React from 'react'

import Container from './components/Container'
import TodoList from './components/Tasks/TodoList'
import { todoAPI } from './services/TodoService'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import { AxiosError } from 'axios'

function App() {
	const { isLoading, error } = todoAPI.useFetchAllTodoQuery()

	return (
		<>
			<div className="container mx-auto max-w-2xl pt-10">
				<div className="flex flex-col items-center">
					{isLoading && <Loader />}
					{error ? (
						<ErrorMessage error={AxiosError.ERR_BAD_REQUEST} />
					) : (
						!isLoading && (
							<div className="border w-full shadow p-10 flex flex-col gap-10">
								<Container title={'Список задач'}>
									<TodoList />
								</Container>
							</div>
						)
					)}
				</div>
			</div>
		</>
	)
}

export default App
