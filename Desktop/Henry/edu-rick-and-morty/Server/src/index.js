const express = require('express')
const server = express()
const router = require('./routes')
const PORT = 3001
const cors = require('cors')
const { conn } = require('./DB_connection')

server.use(cors())


server.use(express.json());
server.use('/rickandmorty', router)

conn.sync({forece: true}).then(()=>{
   server.listen(PORT, () => console.log(`Server raised in: ${PORT}`))
})
