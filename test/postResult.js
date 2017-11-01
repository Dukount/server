const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app.js')
const db = require('../models/result')

chai.use(chaiHttp)

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

describe('Insert Result : ', () => {
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
    .post('/')
    .send(result)
    .end((err, response) => {
      response.status.should.equal(200)
      done()
    })
  })

  it ('Hasil response.body.data dengan tipe data = "object"', (done) => {
    chai.request(app)
    .post('/')
    .send(result)
    .end((err, resp) => {
      var respon = JSON.parse(resp.text)
      respon.should.be.an('object')
      expect(respon).to.be.an('object')
      done()
    })
  })

  it ('Hasil response.body.data.salary = "salary"', (done) => {
    chai.request(app)
    .post('/')
    .send(result)
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon.salary.should.equal('salary')
      done()
    })
  })

  it ('Hasil response.body.data.breakfastCost = "breakfastCost"', (done) => {
    chai.request(app)
    .post('/')
    .send(result)
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon.breakfastCost.should.equal('breakfastCost')
      done()
    })
  })

  it ('Hasil response.body.data.lunchCost = "lunchCost"', (done) => {
    chai.request(app)
    .post('/')
    .send(result)
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon.lunchCost.should.equal('lunchCost')
      done()
    })
  })

  it ('Hasil response.body.data.dinnerCost = "dinnerCost"', (done) => {
    chai.request(app)
    .post('/')
    .send(result)
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon.dinnerCost.should.equal('dinnerCost')
      done()
    })
  })
  it ('Hasil response.body.data.snackCost = "snackCost"', (done) => {
    chai.request(app)
    .post('/')
    .send(result)
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon.snackCost.should.equal('snackCost')
      done()
    })
  })
  it ('Hasil response.body.data.categoryFood = "categoryFood"', (done) => {
    chai.request(app)
    .post('/')
    .send(result)
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon.categoryFood.should.equal('categoryFood')
      done()
    })
  })
  it ('Hasil response.body.data.tripCost = "tripCost"', (done) => {
    chai.request(app)
    .post('/')
    .send(result)
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon.tripCost.should.equal('tripCost')
      done()
    })
  })
  it ('Hasil response.body.data.totalCost = "totalCost"', (done) => {
    chai.request(app)
    .post('/')
    .send(result)
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon.totalCost.should.equal('totalCost')
      done()
    })
  })

  it ('Hasil response.body.data.author = "author"', (done) => {
    chai.request(app)
    .post('/')
    .send(result)
    .end((err, response) => {
      var respon = JSON.parse(response.text)
      respon.author.should.equal('author')
      done()
    })
  })
})
