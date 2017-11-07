const mongoose = require('mongoose')

const schemaResult = new mongoose.Schema({
  salary: String,
  foodCostTotal: String,
  breakfastCost: String,
  breakfastType: String,
  lunchType: String,
  lunchCost: String,
  lunchType: String,
  dinnerCost: String,
  dinnerType: String,
  transportationTotal: String,
  transportationType: String,
  tripDurationTotal: String,
  salaryLeft: String,
  salaryToSave: String,
  author: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'User'
  }
}, {
  timestamps: true
})

const Result = mongoose.model('Result', schemaResult)

module.exports = Result
