const mongoose = require('mongoose')
const Notas = require('./model')

const Nota = {

create: async (req,res)=>{
    const notas = new Notas(req.body)
    const notaSave = await notas.save()
    res.status(201).send(notaSave._id)
},

}

module.exports = Nota