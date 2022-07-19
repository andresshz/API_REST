const mongoose = require('mongoose')
const Notas = require('./model')

const Nota = {

create: async (req,res)=>{
    const notas = new Notas(req.body)
    const notaSave = await notas.save()
    res.status(201).send(notaSave._id)
},

delete: async (req,res)=>{
const {id} = req.params 
const notaDelete = await Notas.findOne({_id: id})
if(notaDelete){
   notaDelete.remove() 
}
res.sendStatus(204)
},

list: async (req,res)=>{
    const listar = await Notas.find()
    res.status(200).send(listar)
}

}

module.exports = Nota