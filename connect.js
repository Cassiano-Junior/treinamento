const mongoose = require('mongoose')

const connectToDataBase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejs.notdelt.mongodb.net/`) 
        return console.log("Conexão ao banco de dados realizada com sucesso!")
    } catch (error) {
        return console.log("Ocorreu um erro ao se conectar com o banco de dados: ", error)
    }

}

module.exports = connectToDataBase