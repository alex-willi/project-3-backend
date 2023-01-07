const express = require('express')
const router = express.Router()
const Authors = require('../models/Authors')
const Posts = require('../models/Posts')

//index
router.get('/', async (req,res)=>{
    try{
        const allAuthors = await (Authors.find({}))
        res.status(200).json(allAuthors)
    } catch (err) {
        res.status(400).json({error:err})
    }
})
//show
router.get('/:id', async (req,res,next)=>{
    try{
        const foundAuthor = await Authors.findById(req.params.id)
        const authorPosts = await Posts.find({author: req.params.id})

        res.status(200).json({author:foundAuthor, posts: authorPosts})
    } catch(err) {
      res.status(400).json({error:err})
      next(err)
    }
})
//create
router.post('/', async (req,res)=>{
    try{
        console.log("hitting post route")
        const newAuthor = await Authors.create(req.body)
        res.status(201).json(newAuthor)
    }catch(err){
        console.log(err)
        res.status(400).json({error: err})
    }
})

module.exports = router