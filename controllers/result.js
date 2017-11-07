const db = require('../models/result')
const redis = require('redis')
const client = redis.createClient()


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
    author: req.headers.oten._id
  })
  .then(resp => {
    resp.populate('author', (err) => {
      if (err) {
        res.send(err)
      } else {
        console.log('ini populate post',resp);
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
  db.remove({_id: req.params.id})
  .then(resp => {
    res.send(resp)
  })
  .catch(err => {
    res.send(err)
  })
}

const update = (req, res) => {
  db.update({_id: req.params.id}, {
    salary: req.body.salary,
    breakfastCost: req.body.breakfastCost,
    lunchCost: req.body.lunchCost,
    dinnerCost: req.body.dinnerCost,
    snackCost: req.body.snackCost,
    categoryFood: req.body.categoryFood,
    tripCost: req.body.tripCost,
    totalCost: req.body.totalCost,
    author: req.headers.oten.id
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
