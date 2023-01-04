const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    title: String,
    photo: String,
    body: String

})

const Posts = mongoose.model("posts", postsSchema)

module.exports = Posts