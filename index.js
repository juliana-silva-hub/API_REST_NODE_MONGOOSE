// config inicial
const express = require('express')
const app = express()

// forma de ler JSON/ middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// rota inicial / endpoint



// entregar uma porta
app.listen(3000)