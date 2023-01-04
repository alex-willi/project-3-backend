const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('./config/db.connection')
const authorsController = require('./controllers/author_controller')
const postsController = require('./controllers/post_controller')
require('dotenv').config()
const { PORT } = process.env

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/home',authorsController)
app.use('/posts',postsController)

app.get('/', (req,res)=>{
    res.redirect('/home')
})

app.listen(PORT, ()=>console.log(`Listening to port: ${PORT}`))
