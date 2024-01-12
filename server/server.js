require('dotenv').config()
import express from 'express'
import cors from 'cors'
import initRoutes from './src/routes'
import connectDatabase from './src/config/connectDatabase'

const app = express()
app.use(
  cors({
    // Cho phép URL sau được truy cập
    origin: process.env.CLIENT_URL,
    // Chỉ cho phép các thao tác sau
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
  })
)

// Cấu hình đọc được API từ client
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRoutes(app)
connectDatabase()

const port = process.env.PORT || 8888
app.listen(port, () => {
  console.log(`Server listing PORT: http://localhost:${port}`)
})
