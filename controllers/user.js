const db = require('../models/user')
const jwt = require('jsonwebtoken')

const register = (req, res) => {
  db.find()
  .then(respFind => {
    respFind.map(item => {
      if (item.username === req.body.username) {
        res.send('maaf username sudah terdaftar')
      } else {
        db.create({
          name: req.body.name,
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          telp: req.body.telp,
        })
        .then(resp => {
          res.send(resp)
        })
        .catch(err => {
          res.send(err)
        })
      }
    })
  })
  .catch(err => {
    res.send(err)
  })
}

const login = (req, res) => {
  db.find({username: req.body.username})
  .then(resp => {
    if (resp.length === 1 && resp[0].username === req.body.username) {
      var readyToWrap = {
        _id: resp[0]._id,
        name: resp[0].name,
        username: resp[0].username,
        password: resp[0].password,
      }
      var token = jwt.sign(readyToWrap, 'dokount')
      res.send({token, resp})
    } else {
      res.send({msg:'Maaf username tidak terdaftar'})
    }
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  register,
  login
}
