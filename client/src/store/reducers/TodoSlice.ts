import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITodo } from '../../models/ITodo'
// import { todoAPI } from '../../services/TodoService'
import { fetchTodos } from './ActionCreators'

interface TodoState {
	todos: ITodo[]
	isLoading: boolean
	error: null | string
}

const initialState: TodoState = {
	todos: [],
	isLoading: false,
	error: '',
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {},
	// extraReducers: (builder) => {
	// 	builder.addMatcher(
	// 		todoAPI.endpoints.fetchAllTodo.matchFulfilled,
	// 		(state, action) => {
	// 			state.isLoading = false
	// 			state.error = ''
	// 			state.todos = action.payload
	// 		}
	// 	)
	// 	builder.addMatcher(
	// 		todoAPI.endpoints.createTodo.matchFulfilled,
	// 		(state, action) => {
	// 			state.isLoading = false
	// 			state.error = ''
	// 			state.todos = action.payload
	// 		}
	// 	)
	// 	builder.addMatcher(todoAPI.endpoints.removeTodo.matchFulfilled, (state) => {
	// 		state.isLoading = false
	// 		state.error = ''
	// 	})
	// 	builder.addMatcher(
	// 		todoAPI.endpoints.updateTodo.matchFulfilled,
	// 		(state, action) => {
	// 			state.isLoading = false
	// 			state.error = ''
	// 			state.todos = action.payload
	// 		}
	// 	)
	// },
	extraReducers: {
		[fetchTodos.pending.type]: (state) => {
			state.isLoading = false
		},
		[fetchTodos.fulfilled.type]: (state, action: PayloadAction<ITodo[]>) => {
			state.isLoading = false
			state.error = ''
			state.todos = action.payload
		},
		[fetchTodos.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default todoSlice.reducer
