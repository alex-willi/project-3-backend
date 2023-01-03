const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('./config/db.connection')
require('dotenv').config()
const { PORT } = process.env
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


app.get('/', (req,res)=>{
    res.send("Home")
})

app.listen(PORT, ()=>console.log(`Listening to port: ${PORT}`))
