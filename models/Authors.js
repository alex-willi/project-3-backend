const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
});

const Authors = mongoose.model("authors", authorsSchema);

module.exports = Authors;