const express = require('express');
const streamingSitesModel = require('../models/streaming-model');
const gamingSitesModel = require('../models/gaming-model')
const shoppingSitesModel = require('../models/shopping-model')
const socialsSitesModel = require('../models/socials-model')
const router = express.Router()

router.post('/post', async (req, res) => {
    const data = new suggestedSitesModel({
        name: req.body.name,
        url: req.body.url
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (req, res) => {
    try{
        const data = await suggestedSitesModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by name Method
router.get('/getOne/:category', async (req, res) => {
    try {
        const cat = req.params.category
        let data = ''
        if (cat === 'streaming') {
        data = await streamingSitesModel.find()
        } else if (cat === 'gaming') {
            data = await gamingSitesModel.find()
        } else if (cat === 'shopping') {
            data = await shoppingSitesModel.find()
        } else if (cat === 'socials') {
            data = await socialsSitesModel.find()
        }
        res.json(data)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})


module.exports = router;
