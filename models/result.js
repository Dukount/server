const mongoose = require('mongoose')

const schemaResult = new mongoose.Schema({
  salary: String,
  breakfastCost: String,
  lunchCost: String,
  dinnerCost: String,
  snackCost: String,
  categoryFood: String,
  tripCost: String,
  totalCost: String,
  author: String
}, {
  timestamps: true
})

const Result = mongoose.model('Result', schemaResult)

module.exports = Result
