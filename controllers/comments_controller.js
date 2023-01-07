const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const Comments = require("../models/Comments");
const Posts = require("../models/Posts");

//index
router.get("/", async(req, res, next) => {
    try {
        const allComments = await Comments.find({}).populate("post");
        res.status(200).json(allComments);
    } catch (err) {
        res.status(400).json({ error: err });
        next(err);
    }
});
router.get("/:id", async(req, res, next) => {
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
router.post("/", async(req, res) => {
    try {
        console.log("hitting post route");
        const newComment = await Comments.create(req.body);
        res.status(201).json(newComment);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err });
    }
});
//update
router.put("/:id", async(req, res) => {
    try {
        const updateComment = await Comments.findByIdAndUpdate(
            req.params.id,
            req.body, { new: true }
        );
        res.status(201).json(updateComment);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});
//destroy
router.delete("/:id", async(req, res) => {
    try {
        const destroyComment = await Comments.findByIdAndDelete(req.params.id);
        res.status(201).json(destroyComment);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

module.exports = router;