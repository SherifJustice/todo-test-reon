/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ITodo } from '../models/ITodo'

export type TodoData = Omit<ITodo, 'id'>

export const todoAPI = createApi({
	reducerPath: 'todoApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
	tagTypes: ['Todo'],
	endpoints: (builder) => ({
		fetchAllTodo: builder.query<ITodo[], void>({
			query: () => ({
				url: '/todo',
				method: 'GET',
			}),
			providesTags: (result) => ['Todo'],
		}),
		createTodo: builder.mutation<ITodo, TodoData>({
			query: (todoData) => ({
				url: '/todo',
				method: 'POST',
				body: todoData,
			}),
			invalidatesTags: (result) => ['Todo'],
		}),
		updateTodo: builder.mutation<ITodo, ITodo>({
			query: (todoData) => ({
				url: `/todo/${todoData.id}`,
				method: 'PUT',
				body: todoData,
			}),
			invalidatesTags: (result) => ['Todo'],
		}),
		removeTodo: builder.mutation<ITodo, ITodo>({
			query: (todoData) => ({
				url: `/todo/${todoData.id}`,
				method: 'DELETE',
				body: todoData,
			}),
			invalidatesTags: (result) => ['Todo'],
		}),
	}),
})

export const {
	useFetchAllTodoQuery,
	useCreateTodoMutation,
	useUpdateTodoMutation,
	useRemoveTodoMutation,
} = todoAPI

export const {
	endpoints: { fetchAllTodo, createTodo, updateTodo, removeTodo },
} = todoAPI
