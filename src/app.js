const express = require('express')

const app = express()
const db = require('./utils/database')
const port = require('../config').api.port // definición del puerto



//* Autenticar base de datos (si conexión fue exitosa) - *Este es sólo informativo*
db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch((err) => console.log(err))

//* Sincronizar base de datos
db.sync()
    .then(() => console.log('Database Synced'))
    .catch((err) => console.log(err))

//* habilitar formato .json dentro de las peticiones
app.use(express.json()) 

//* aviso servidor activo
app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.use('/api/v1/users', userRouter)

app.listen(() => {
    console.log(`Server started at port ${port}`)
})
