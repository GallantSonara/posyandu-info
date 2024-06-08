const mongoose = require('mongoose')

const kelahiranSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, 'Masukan Nama Anak']
  },
  nik: {
    type: Number,
  },
  lahir: {
    type: Date,
    required: [true, 'Masukan Tanggal Lahir Anak']
  },
  tempatLahir: {
    type: String
  },
  lingkarKepala: {
    type: Number
  },
  berat: {
    type: Number
  },
  tinggi: {
    type: Number
  },
  objectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ibu'
  }
})