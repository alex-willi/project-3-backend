const express = require('express')
const router = express.Router()
const Authors = require('../models/Authors')
//index
router.get('/', async (req,res)=>{
    try{
        const allAuthors = await (Authors.find({}))
        res.status(200).json(allAuthors)
    }catch(err){
        res.status(400).json({error:err})
    }
})
//show
router.get('/:id', async (req,res)=>{
    try{
        const foundAuthor = await Authors.findById(req.params.id)
        res.status(200).json(foundAuthor)
    }catch(err){
    res.status(400).json({error:err})
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