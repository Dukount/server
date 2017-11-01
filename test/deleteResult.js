const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app.js')
const db = require('../models/result')

var testing_delete = null
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

describe('Delete one: ', () => {
  beforeEach(done => {
    db.create(result)
    .then(response => {
      testing_delete = response._id
      done()
    })
    .catch(err => {
      console.log(err)
    })
  })

  it ('Hasil response status = 200', (done) => {
    chai.request(app)
    .delete(`/${testing_delete}`)
    .end((err, response) => {
      response.status.should.equal(200)
      done()
    })
  })

  it ('Hasil response.body.messeage = "data removed"', (done) => {
    chai.request(app)
    .delete(`/${testing_delete}`)
    .end((err, response) => {
      response.body.ok.should.equal(1)
      response.body.n.should.equal(1)
      done()
    })
  })

  it ('Hasil response2.body.message = "data not found"', (done) => {
    chai.request(app)
    .delete(`/${testing_delete}`)
    .end((err, response) => {
      chai.request(app)
      .get(`/${testing_delete}`)
      .end((err2, response2) => {
        console.log('===============',response2);
        response2.text.should.equal('')
        done()
      })

    })
  })
})
