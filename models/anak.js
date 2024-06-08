const mongoose = require('mongoose')

const anakSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, 'Masukan Nama Anak']
  },
  nik: {
    type: Number,
    required: [true, 'Masukan NIK Anak']
  },
  lahir: {
    type: Date,
    required: [true, 'Masukan Tanggal Lahir Anak']
  },
  jenisKelamin: {
    type: String,
    enum: ['Laki-laki', 'Perempuan'],
    required: [true, 'Masukan Jenis Kelamin Anak']
  },
  objectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'imunisasi'
  },
  objectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ibu'
  }
})

module.exports = mongoose.model('anak', anakSchema)