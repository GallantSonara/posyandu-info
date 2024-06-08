const mongoose = require('mongoose')

const momGrowthSchema = new mongoose.Schema({
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
  kb: {
    type: String,
    enum: ['Pil', 'Suntik', 'Implan', 'Kondom', 'MOP', 'MOW', 'IUD']
  },
  hamil: {
    type: Boolean,
    required: [true, 'Masukan Status Kehamilan']
  },
  usiaKandungan: {
    type: Number
  },
  lingkarLengan: {
    type: Number
  },
  lingkarPerut: {
    type: Number
  },
  kms: {
    type: Boolean,
    required: [true, 'Masukan KMS']
  },
  objectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ibu'
  }
})

module.exports = mongoose.model('momGrowth', momGrowthSchema)