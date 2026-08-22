const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 8080

dotenv.config()

if (!process.env.DATABASE_ACCESS) {
  console.error('DATABASE_ACCESS is not set — check your .env file')
  process.exit(1)
}

mongoose
  .connect(process.env.DATABASE_ACCESS)
  .then(() => console.log('Database Connected'))
  .catch((err) => {
    console.error('Database connection failed:', err.message)
    process.exit(1)
  })

app.use(express.json())
app.use(cors())

// In production mode, serve the frontend build folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'build')))
}
app.use('/app', routesUrls)
app.listen(PORT, () => console.log(`Server is starting at ${PORT}`))
