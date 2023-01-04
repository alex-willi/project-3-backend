const mongoose = require('mongoose')

const authorsSchema = new mongoose.Schema({
    name:{
        type:String
    }
})

const Authors = mongoose.model("authors", authorsSchema)

module.exports = Authors