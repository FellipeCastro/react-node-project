const express = require('express')
const routes = require('./routes.js')
const app = express()

app.use(express.json())
app.use(routes)

require('./config/dbConfig.js')

const PORT = 3333



app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})
