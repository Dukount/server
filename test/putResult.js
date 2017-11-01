const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app.js')
const db = require('../models/result')

var testing_update = null

var resultUpdated = {
  salary: 'salaryUpdated',
  breakfastCost: 'breakfastCostUpdated',
  lunchCost: 'lunchCostUpdated',
  dinnerCost: 'dinnerCostUpdated',
  snackCost: 'snackCostUpdated',
  categoryFood: 'categoryFoodUpdated',
  tripCost: 'tripCostUpdated',
  totalCost: 'totalCostUpdated',
  author: 'authorUpdated'
}

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

describe('Update one article: ', () => {
  beforeEach(done => {
    db.create(result)
    .then(response => {
      testing_update = response._id
      done()
    })
    .catch(err => {
      console.log(err)
    })
  })

  afterEach(done => {
    db.remove()
    .then(response => {
      testing_update = null
      done()
    })
    .catch(err => {
      console.log(err)
    })
  })

  it ('Hasil response status = 200', (done) => {
    chai.request(app)
    .put(`/${testing_update}`)
    .send(resultUpdated)
    .end((err, response) => {
      response.status.should.equal(200)
      done()
    })
  })

  it ('Hasil response.body.message = "data updated"', (done) => {
    chai.request(app)
    .put(`/${testing_update}`)
    .send(resultUpdated)
    .end((err, response) => {
      response.body.n.should.equal(1)
      response.body.nModified.should.equal(1)
      response.body.ok.should.equal(1)
      done()
    })
  })

  it('Hasil response2.body.data.title = "title updated"', (done) => {
    chai.request(app)
    .put(`/${testing_update}`)
    .send(resultUpdated)
    .end((err, response) => {
      chai.request(app)
      .get(`/${testing_update}`)
      .end((err2, response2) => {
        response2.body.salary.should.equal('salaryUpdated')
        done()
      })

    })
  })
  it('Hasil response2.body.data.sub_desc = "sub_desc updated"', (done) => {
    chai.request(app)
    .put(`/${testing_update}`)
    .send(resultUpdated)
    .end((err, response) => {
      chai.request(app)
      .get(`/${testing_update}`)
      .end((err2, response2) => {
        response2.body.breakfastCost.should.equal('breakfastCostUpdated')
        done()
      })
    })
  })

  it('Hasil response2.body.data.desc = "desc updated"', (done) => {
    chai.request(app)
    .put(`/${testing_update}`)
    .send(resultUpdated)
    .end((err, response) => {
      chai.request(app)
      .get(`/${testing_update}`)
      .end((err2, response2) => {
        response2.body.lunchCost.should.equal('lunchCostUpdated')
        done()
      })
    })
  })

  it('Hasil response2.body.data.author = "author updated"', (done) => {
    chai.request(app)
    .put(`/${testing_update}`)
    .send(resultUpdated)
    .end((err, response) => {
      chai.request(app)
      .get(`/${testing_update}`)
      .end((err2, response2) => {
        response2.body.author.should.equal('authorUpdated')
        done()
      })

    })
  })
})
