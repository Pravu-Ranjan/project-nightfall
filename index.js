require('dotenv').config()

const express = require('express')
const cors = require('cors')
const DBConnection = require('./utils/database')
const errorHandler = require('./utils/error')
const app = express()
app.use(express.json({ limit: '50mb' }))
app.use(cors())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT

require('./model/index')
require('./routes')(app)
app.use(errorHandler)

app.listen(PORT, DBConnection(), () =>
  console.log(`Server up and running on port: ${PORT}`)
)
