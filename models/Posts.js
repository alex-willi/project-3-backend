const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    title: String,
    photo: String,
    body: String,
    author: {
        type: mongoose.Types.ObjectId,
        ref: "authors",
    },
});

const Posts = mongoose.model("posts", postsSchema);

module.exports = Posts;