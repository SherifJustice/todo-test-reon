import express from 'express'
import dotenv from 'dotenv'
import { sequelize } from './db.js'
import models from './models/models.js'
import cors from 'cors'
import router from './routes/index.js'
import { errorHandler } from './middleware/ErrorHandlingMiddleware.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
dotenv.config()

// Обработка ошибок, последний Middleware
app.use(errorHandler)

// Constants
const PORT = process.env.PORT || 5000

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => console.log(`Server SLUHAET on port ${PORT}`))
	} catch (error) {
		console.log(error)
	}
}

start()
