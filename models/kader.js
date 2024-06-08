const mongoose = require('mongoose')

const kaderSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Masukan Nama Kader']
  },
  password: {
    type: String,
    required: [true, 'Masukan Password Kader']
  }
})

module.exports = mongoose.model('kader', kaderSchema)