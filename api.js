const express = require('express')
const controller = require('./controller')
const mongoose = require('mongoose')
const app = express()
const port = 3000

mongoose.connect('mongodb+srv://andres_mgDB:150193vasquezFV04@andrescluster.wkcwf.mongodb.net/miapp?retryWrites=true&w=majority')
app.use(express.json())

app.get('/notas', (req, res)=>{
res.status(200).send("Hola usuario")
})

app.get('/notasList',controller.list)

app.post('/notas',controller.create)

app.delete('/notas/:id',controller.delete)

app.use(express.static('app'))

app.get('/views', (req,res)=>{
res.sendFile(`${__dirname}/index.html`)
})
app.listen(port , ()=>{
    console.log("Arrancando la api")
})







