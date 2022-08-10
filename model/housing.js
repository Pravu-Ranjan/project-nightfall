const mongoose = require('mongoose')

const housingSchema = new mongoose.Schema({
  mortgage: {
    type: Number,
  },
  property_tax: {
    type: Number,
  },
  household_repairs: {
    type: Number,
  },
  HOA_fees: {
    type: Number,
  },
})

const housing = mongoose.model('housing', housingSchema)

module.exports = housing
