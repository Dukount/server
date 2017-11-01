const db = require('../models/result')

const insert = (req, res) => {
  db.create({
    salary: req.body.salary,
    breakfastCost: req.body.breakfastCost,
    lunchCost: req.body.lunchCost,
    dinnerCost: req.body.dinnerCost,
    snackCost: req.body.snackCost,
    categoryFood: req.body.categoryFood,
    tripCost: req.body.tripCost,
    totalCost: req.body.totalCost,
    author: req.body.author
  })
  .then(resp => {
    res.send(resp)
  })
  .catch(err => {
    res.send(err)
  })
}
const fetch = (req, res) => {
  db.find()
  .then(resp => {
    res.send(resp)
  })
  .catch(err => {
    res.send(err)
  })
}

const lost = (req, res) => {
  db.remove({_id: req.params.id})
  .then(resp => {
    res.send(resp)
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {
  insert,
  fetch,
  lost
}
