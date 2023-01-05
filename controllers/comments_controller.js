const express = require('express')
const router = express.Router()

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const Comments = require('../models/Comments')
const Posts = require('../models/Posts')

//index
router.get('/', async (req,res,next)=>{
    try{
        const allComments = await Comments.find({}).populate('post')
        res.status(200).json(allComments)
    }catch(err){
        res.status(400).json({error:err})
        next(err)
    }
})

router.post('/', async (req,res)=>{
    try{
        console.log("hitting post route")
        const newPost = await Comments.create(req.body)
        res.status(201).json(newPost)
    }catch(err){
        console.log(err)
        res.status(400).json({error: err})
    }
})

module.exports = router