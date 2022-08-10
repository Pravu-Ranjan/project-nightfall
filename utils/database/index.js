const dbConfig = require('../../config/dbConfig')
const mongoose = require('mongoose')

const DBConnection = async () => {
  try {
    await mongoose.connect(dbConfig.mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Database connected')
  } catch (error) {
    console.log(error.name, error.message)
  }
}

module.exports = DBConnection
