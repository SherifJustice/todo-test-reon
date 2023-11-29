import { sequelize } from '../db.js'
import { DataTypes } from 'sequelize'

const Todo = sequelize.define('todo', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.STRING },
	done: { type: DataTypes.BOOLEAN, defaultValue: false },
	date: { type: DataTypes.STRING },
})

const TodoList = sequelize.define('todo_list', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, allowNull: false },
})

TodoList.hasMany(Todo)
Todo.belongsTo(TodoList)

export default {
	Todo,
	TodoList,
}
