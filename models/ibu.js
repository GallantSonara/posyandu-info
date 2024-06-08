const mongoose = require('mongoose')

const ibuSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, 'Masukan Nama Ibu']
  },
  nik: {
    type: Number,
    required: [true, 'Masukan NIK Ibu']
  },
  lahir: {
    type: Date,
    required: [true, 'Masukan Tanggal Lahir Ibu']
  },
  suami: {
    type: String,
    required: [true, 'Masukan Nama Suami']
  },
  nikSuami: {
    type: String,
    required: [true, 'Masukan NIK Suami']
  },
  noKK: {
    type: String,
    required: [true, 'Masukan Nomor Kartu Keluarga']
  },
  rt: {
    type: String,
    required: [true, 'Masukan RT'],
    enum: ['01', '02', '03']
  },
  bpjs: {
    type: Boolean,
    default: false
  },
  kesejahteraan: {
    type: String,
    required: [true, 'Masukan Kesejahteraan Ibu'],
    enum: ['KS1', 'KS2', 'KS3']
  },
  jmlAnak: {
    type: Number,
    required: [true, 'Masukan Jumlah Anak']
  },
  object_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'anak'
  }
})

module.exports = mongoose.model('ibu', ibuSchema)