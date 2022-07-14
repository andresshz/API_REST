const mongoose = require('mongoose')

const notas = mongoose.model('Nota', {
titulo: {type: String, required: true, minLegth:3},
descripcion: {type: String, required: true, minLegth:3},
})

module.exports = notas