const express = require("express");
const router = express.Router();
const Posts = require("../models/Posts");
const Comments = require("../models/Comments");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//index
router.get("/", async (req, res, next) => {
  try {
    const allPosts = await Posts.find({}).populate("author");
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(400).json({ error: err });
    next(err);
  }
});
//show
router.get("/:id", async (req, res, next) => {
  try {
    const foundPost = await Posts.findById(req.params.id);
    const postComments = await Comments.find({ post: req.params.id });
    res.status(200).json({ post: foundPost, comments: postComments });
  } catch (err) {
    res.status(400).json({ error: err });
    next(err);
  }
});
//create
router.post("/", async (req, res) => {
  try {
    const newPost = await Posts.create(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
});
//update
router.put("/:id", async (req, res) => {
  try {
    const updatePost = await Posts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(updatePost);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
//destroy
router.delete("/:id", async (req, res) => {
  try {
    const destroyPost = await Posts.findByIdAndDelete(req.params.id);
    const destroyComments = await Comments.deleteMany({ post: req.params.id });
    res.status(200).json({ post: destroyPost, comment: destroyComments });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
