const mongoose = require('mongoose')

const kidGrowthSchema = new mongoose.Schema({
  tglCheck: {
    type: Date,
    required: [true, 'Masukan Tanggal Check Up']
  },
  tinggi: {
    type: Number,
    required: [true, 'Masukan Tinggi Badan']
  },
  berat: {
    type: Number,
    required: [true, 'Masukan Berat Badan']
  },
  kelompok: {
    type: String,
    required: [true, 'Masukan Kelompok Usia'],
    enum: ['BADUTA', 'BALITA']
  },
  objectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'anak'
  }
})

module.exports = mongoose.model('kidGrowth', kidGrowthSchema)