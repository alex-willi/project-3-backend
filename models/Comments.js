const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    name: String,
    comment: String,
    posts:{
        type: mongoose.Types.ObjectId,
        ref: "posts"
    }

})

const Comments = mongoose.model("comments", commentsSchema)

module.exports = Comments