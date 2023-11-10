const express = require('express')
const mongoose = require ('mongoose')
//definir ruta
const router = express.Router()
const ReviewModel = require('../models/reviewModel')
const reviewModel = require('../models/reviewModel')

router.get('/', async (req, res)=>{
    try{
        const review = await ReviewModel.find()
        if(review.length > 0){
            res.
            status(200).
            json({
                success: true,
                data: review
            })
        }else{
            res.status(400)
            .json({
            success: false,
            message: 'No hay reviews'
        })
        }

    }catch(error){
        res.status(400)
        .json({
            success: false,
            message: error.message
        })

    }
})

router.get('/:id', async (req, res)=>{
    try{
        reviewId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(reviewId)){
            res.status(500)
            .json({
                success: false,
                msg: "identificador invalido"
                })
        }else{
            const review = await reviewModel.findById(reviewId)
            if(review){
                res.
                status(200)
                .json({
                    success: true,
                    data: review
            })
            }else{
                res
                .status(400)
                .json({
                    success: false,
                    message: `No hay bootcamps con id: ${reviewId}`
            })
            }
        }
    }catch(error){
        res.
        status(400)
        .json({
            success: false,
            message: error.message
        })
    }
})

router.post('/', async (req, res)=>{
    try{
        const newReview = await ReviewModel.create(req.body)
        res.
        status(400)
        .json({
        success: true,
        data: newReview
    })
    }catch(error){
        res.status(400)
        .json({
            success: false,
            message: error.message
        })
    }
})

//editar
router.put('/:id', async (req, res)=>{
    try{
        const reviewId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(reviewId)){
            res.status(500)
            .json({
                success: false,
                msg: "identificador invalido"
            })
        }else{
            const updReview =
                await ReviewModel.
                findByIdAndUpdate(reviewId, 
                    req.body, 
                    {
                    new: true
                })
            if(updReview){
                res.json({
                    success: true,
                    data:updReview
                })
            }else{
                res
                .status(400)
                .json({
                    success: false,
                    message: `No hay bootcamps con id: ${reviewId}`
            })
            }
        }
    }catch(error){
        res.status(400)
        .json({
            success: false,
            message: error.message
        })
    }
})

//eliminar
router.delete('/:id', async (req, res)=>{
    try{
        const reviewId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(reviewId)){
            res.status(500)
            .json({
                success: false,
                msg: "identificador invalido"
            })
        }else{
            const delReview = 
            await ReviewModel.findByIdAndDelete(reviewId)

            if(delReview){
                res.json({
                    success: true,
                    data: delReview
                })
            }else{
                res
                .status(400)
                .json({
                    success: false,
                    message: `No hay reviews con id: ${reviewId} por lo tanto no se puede eliminar`
            })
            }
        }
    }catch(error){
        res.status(400)
        .json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router