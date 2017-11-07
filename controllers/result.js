const db = require('../models/result')
const redis = require('redis')
const client = redis.createClient()


const insert = (req, res) => {
  db.create({
    salary: req.body.salary,
    foodCostTotal: req.body.foodCostTotal,
    breakfastCost: req.body.breakfastCost,
    breakfastType: req.body.breakfastType,
    lunchType: req.body.lunchType,
    lunchCost: req.body.lunchCost,
    lunchType: req.body.lunchType,
    dinnerCost: req.body.dinnerCost,
    dinnerType: req.body.dinnerType,
    transportationTotal: req.body.transportationTotal,
    transportationType: req.body.transportationType,
    tripDurationTotal: req.body.tripDurationTotal,
    salaryLeft: req.body.salaryLeft,
    salaryToSave: req.body.salaryToSave,
    author: req.headers.oten._id
  })
  .then(resp => {
    resp.populate('author', (err) => {
      if (err) {
        res.send(err)
      } else {
        res.send(resp)
      }
    })
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
  db.remove({_id: req.headers.oten._id})
  .then(resp => {
    res.send(resp)
  })
  .catch(err => {
    res.send(err)
  })
}

const update = (req, res) => {
  db.update({_id: req.headers.oten._id}, {
    salary: req.body.salary,
    foodCostTotal: req.body.foodCostTotal,
    breakfastCost: req.body.breakfastCost,
    breakfastType: req.body.breakfastType,
    lunchType: req.body.lunchType,
    lunchCost: req.body.lunchCost,
    lunchType: req.body.lunchType,
    dinnerCost: req.body.dinnerCost,
    dinnerType: req.body.dinnerType,
    transportationTotal: req.body.transportationTotal,
    transportationType: req.body.transportationType,
    tripDurationTotal: req.body.tripDurationTotal,
    salaryLeft: req.body.salaryLeft,
    salaryToSave: req.body.salaryToSave,
    author: req.headers.oten._id
  })
  .then(resp => {
    res.send(resp)
  })
  .catch(err => {
    res.send(err)
  })
}

const fetchId = (req, res) => {
  client.get('alldata', (err, result) => {
    if (result) {
      var parseResult = JSON.parse(result)
      res.send(parseResult)
    } else {
      db.findOne({author: req.headers.oten._id})
      .populate('author')
      .then(resp => {
        console.log(resp);
        var respRedis = JSON.stringify(resp)
        client.setex('alldata', 60, respRedis)
        res.send({data: resp})
      })
      .catch(err => {
        res.send({data: err})
      })
    }
  })
}

module.exports = {
  insert,
  fetch,
  lost,
  update,
  fetchId
}
