const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  phone: {
    type: String,
  },
  housing: {
    type: mongoose.Schema.Types.ObjectId,
  },
})

const user = mongoose.model('user', userSchema)

module.exports = user
