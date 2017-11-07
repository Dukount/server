const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  telp: String
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User
