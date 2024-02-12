const express = require('express')
const app = express()

require('./config/dbConfig.js')

app.use(express.json())

const PORT = 3333



app.get('/', (req, res) => {
    return res.json({
        nome: 'Fellipe',
        sobrenome: 'Castro',
        profissao: 'Programador'
    })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})
