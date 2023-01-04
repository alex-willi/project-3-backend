const express = require('express')
const router = express.Router()
const Posts = require('../models/Posts')

//index
router.get('/', async (req,res)=>{
    try{
        const allPosts = await Posts.find({})
        res.status(200).json(allPosts)
    }catch(err){
        res.status(400).json({error:err})
    }
})
//show
router.get('/:id', async (req,res)=>{
    try{
        const foundPost = await Posts.findById(req.params.id)
        res.status(200).json(foundPost)
    }catch(err){
    res.status(400).json({error:err})
    }
})
//create
router.post('/', async (req,res)=>{
    try{
        console.log("hitting post route")
        const newPost = await Posts.create(req.body)
        res.status(201).json(newPost)
    }catch(err){
        console.log(err)
        res.status(400).json({error: err})
    }
})
router.put('/:id', async(req,res)=>{
    try{
        const updatePost = await Posts.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).json(updatePost)

    }catch(err){
        res.status(400).json({error: err})

    }
})

module.exports = router