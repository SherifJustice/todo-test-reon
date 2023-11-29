import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
// import { AppDispatch } from '../store'
import { ITodo } from '../../models/ITodo'
// import { todoSlice } from './TodoSlice'

// export const fetchTodos = () => async (dispatch: AppDispatch) => {
// 	try {
// 		dispatch(todoSlice.actions.todosFetching())
// 		const response = await axios.get<ITodo[]>('http://localhost:5000/api/todo')
// 		dispatch(todoSlice.actions.todosFetchingSuccess(response.data))
// 	} catch (error) {
// 		dispatch(todoSlice.actions.todosFetchingError(error.message))
// 	}
// }

export const fetchTodos = createAsyncThunk(
	'todo/fetchAll',
	async (_, thunkAPI) => {
		try {
			const { data } = await axios.get<ITodo[]>(
				'http://localhost:5000/api/todo'
			)
			return data
		} catch (error) {
			return thunkAPI.rejectWithValue('Не удалось загрузить список задач')
		}
	}
)
