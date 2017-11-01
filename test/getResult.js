const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app.js')
const db = require('../models/result')

var result = {
  salary: 'salary',
  breakfastCost: 'breakfastCost',
  lunchCost: 'lunchCost',
  dinnerCost: 'dinnerCost',
  snackCost: 'snackCost',
  categoryFood: 'categoryFood',
  tripCost: 'tripCost',
  totalCost: 'totalCost',
  author: 'author'
}

describe('Read all : ', () => {

  beforeEach(done => {
    db.create(result)
    .then(response => {
      done()
    })
    .catch(err => {
      console.log(err)
    })
  })

  afterEach(done => {
    db.remove()
    .then(response => {
      done()
    })
    .catch(err => {
      console.log(err)
    })
  })

  it ('Hasil response status = 200', (done) => {
    chai.request(app)
    .get('/')
    .end((err, response) => {
      response.status.should.equal(200)
      done()
    })
  })

  it ('Hasil data dengan tipe data = "array"', (done) => {
    chai.request(app)
    .get('/')
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon.should.be.an('array')
      done()
    })
  })

  it ('Hasil response.body.data[0].salary = "salary"', (done) => {
    chai.request(app)
    .get('/')
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon[0].salary.should.equal('salary')
      done()
    })
  })

  it ('Hasil response.body.data[0].breakfastCost = "breakfastCost"', (done) => {
    chai.request(app)
    .get('/')
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon[0].breakfastCost.should.equal('breakfastCost')
      done()
    })
  })
  it ('Hasil response.body.data[0].lunchCost = "lunchCost"', (done) => {
    chai.request(app)
    .get('/')
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon[0].lunchCost.should.equal('lunchCost')
      done()
    })
  })
  it ('Hasil response.body.data[0].snackCost = "snackCost"', (done) => {
    chai.request(app)
    .get('/')
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon[0].snackCost.should.equal('snackCost')
      done()
    })
  })
  it ('Hasil response.body.data[0].categoryFood = "categoryFood"', (done) => {
    chai.request(app)
    .get('/')
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon[0].categoryFood.should.equal('categoryFood')
      done()
    })
  })
  it ('Hasil response.body.data[0].tripCost = "tripCost"', (done) => {
    chai.request(app)
    .get('/')
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon[0].tripCost.should.equal('tripCost')
      done()
    })
  })
  it ('Hasil response.body.data[0].totalCost = "totalCost"', (done) => {
    chai.request(app)
    .get('/')
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon[0].totalCost.should.equal('totalCost')
      done()
    })
  })
  it ('Hasil response.body.data[0].author = "author"', (done) => {
    chai.request(app)
    .get('/')
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon[0].dinnerCost.should.equal('dinnerCost')
      done()
    })
  })

})
