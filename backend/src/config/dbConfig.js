const mongoose = require('mongoose')

const dbConfig = 'mongodb+srv://fehcastru:tXcnpKryCYEo14Qx@cluster0.satuz32.mongodb.net/annotations?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection
