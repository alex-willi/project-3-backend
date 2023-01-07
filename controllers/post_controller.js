const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const Posts = require("../models/Posts");
const Authors = require("../models/Authors");

//index
router.get("/", async(req, res, next) => {
    try {
        const allPosts = await Posts.find({}).populate("author");
        res.status(200).json(allPosts);
    } catch (err) {
        res.status(400).json({ error: err });
        next(err);
    }
});
//show
router.get("/:id", async(req, res, next) => {
    try {
        const post = await Posts.findById(req.params.id);
        const author = await Authors.findById(post.author);

        res.status(200).json({ post: post, author: author });
    } catch (err) {
        res.status(400).json({ error: err });
        next(err);
    }
});
//create
router.post("/:id", async(req, res) => {
    try {
        console.log("hitting post route");
        const newPost = await Posts.create(req.body);
        res.status(201).json(newPost);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err });
    }
});
//update
router.put("/:id", async(req, res) => {
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
router.delete("/:id", async(req, res) => {
    try {
        const destroyPost = await Posts.findByIdAndDelete(req.params.id);
        res.status(201).json(destroyPost);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

module.exports = router;