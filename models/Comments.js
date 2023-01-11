const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  name: String,
  comment: String,
  post: {
    type: mongoose.Types.ObjectId,
    ref: "Post",
  },
});

const Comments = mongoose.model("comments", commentsSchema);

module.exports = Comments;
