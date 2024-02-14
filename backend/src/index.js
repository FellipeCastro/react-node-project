const express = require('express')
const routes = require('./routes.js')
const cors = require('cors')
const app = express()

const PORT = 3333

app.use(cors())
app.use(express.json())
app.use(routes)

require('./config/dbConfig.js')

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})
