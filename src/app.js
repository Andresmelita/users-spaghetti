const express = require('express')

//? files 
const db = require('./utils/database')
const config = require('../config')
const userRouter = require('./users/users.router')

//? initial configuration
const app = express()
app.use(express.json()) 

//? database authentication (informative)
db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch((err) => console.log(err))

//? database synchronization (informative)
db.sync()
    .then(() => console.log('Database Synced'))
    .catch((err) => console.log(err))

//? notice: server active
app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

//? route prefix
app.use('/api/v1/users', userRouter)

app.listen(config.api.port, () => {
    console.log(`Server started at port ${config.api.host}`)
})
