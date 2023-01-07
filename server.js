const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('./config/db.connection')
const authorsController = require('./controllers/author_controller')
const postsController = require('./controllers/post_controller')
const commentsController = require('./controllers/comments_controller')
require('dotenv').config()
const { PORT } = process.env

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())
app.use('/authors', authorsController)
app.use('/posts', postsController)
app.use('/comments', commentsController)

app.get('/', (req, res) => {
    res.redirect('/authors')
})

app.listen(PORT, () => console.log(`Listening to port: ${PORT}`))
