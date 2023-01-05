const mongoose = require('mongoose')

const authorsSchema = new mongoose.Schema({
    name:{
        type:String
    },
    post:{
        type: mongoose.Types.ObjectId,
        ref: "posts"
    }
})

const Authors = mongoose.model("authors", authorsSchema)

module.exports = Authors