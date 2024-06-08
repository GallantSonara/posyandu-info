const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Masukan Username']
  },
  password: {
    type: String,
    required: [true, 'Masukan Password']
  }
})

module.exports = mongoose.model('user', userSchema)