// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Person = require('./models/Person')

// forma de ler JSON/ middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// rotas da API
app.post('/person', async (req, res) => {
   
   //req.body

   // {name: "Juliana", salary: 5000, approved: false}
   const {name, salary, approved} = req.body

   const person = {
     name,
     salary,
     approved
   }

   try {

     // criando dados
     await Person.create(person)

     res.status(201). json({message: 'Pessoa inserida no sistema com sucesso!'})
   } catch (error) {
     res.status(500). json({error: error})
   }

})
 
// rota inicial / endpoint
app.get('/', (req, res) => {


// mostrar req

    res.json({message: 'Oi Express!' })
})


// entregar uma porta
const DB_USER = 'Juliana'
const DB_PASSWORD = encodeURIComponent('HTM3CJjpTMUsnXt')

mongoose.connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.xzuhg.mongodb.net/bancodaapi?retryWrites=true&w=majority`,
    )
    .then(() => {
        console.log("Conectamos ao MongoDB!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))

