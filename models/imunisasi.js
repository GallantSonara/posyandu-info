const mongoose = require('mongoose')

const imunisasiSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  umur: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('imunisasi', imunisasiSchema)