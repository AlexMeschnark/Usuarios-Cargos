const cors = require('cors')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const dataBase = require('./database/database')
app.use(cors());

//  CARGOS


app.get('/', async (req, res) => {
    res.send(await dataBase.mostrarCargos())
})

app.post('/cargo/salvar', async (req, res) => {
    console.log(req)
    const cargoInserido = await dataBase.salvarCargo({
        nome_cargo: req.body.nome_cargo,
        descricao: req.body.descricao,

    })
    

    res.send(req.body)
})

app.put('/cargo/:id', async (req, res) => {
    const cargo = await dataBase.alterarCargo(req.params.id, {
        nome_cargo: req.body.nome_cargo,
        descricao: req.body.descricao,

    })

    res.send(req.body)
})



//  USUARIO
app.put('/usuario/:id', async (req, res) => {
    const usuario = await dataBase.alterarUsuario(req.params.id, {
        id_cargo: req.body.id_cargo,
        id_gerente: req.body.id_gerente,
        nome_usuario: req.body.nome_usuario,
        email: req.body.email

    })

    res.send(req.body)
})

app.get('/usuarios', async (req, res) => {
    res.send(await dataBase.mostrarUsuarios())
})

app.get('/usuario/:id', async (req, res) => {
    res.send(await dataBase.mostrarUsuarioPorId(req.params.id))
})

app.post('/usuario/salvar', async (req, res) => {
    console.log(req)
    const cargoInserido = await dataBase.salvarUsuario({
       
       id_cargo: req.body.id_cargo,
       id_gerente: req.body.id_gerente,
       nome_usuario: req.body.nome_usuario,
       email: req.body.email
    })

    res.send(req.body)
})

app.delete('/usuario/:id', async (req, res) => {
    res.send(await dataBase.deletarUsuario(req.params.id))
})


//mostrarCargosUsuarios
app.get('/usuariosCargos', async (req, res) => {
    res.send(await dataBase.mostrarCargosUsuarios())
})


app.listen('3003')

module.exports = { app }