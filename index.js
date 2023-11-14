const express = require('express')
const dotenv = require("dotenv")
const connectToDataBase = require('./connect')
const UserModel = require('./models/users.model')
const app = express()

dotenv.config()
connectToDataBase();


app.listen(3000, console.log('Servidor rodando!'))

app.use(express.json())

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.send(users)
    } catch (error) {
        res.send(error.message)
    }
})

app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findById(id)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
})

app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndDelete(id)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
})