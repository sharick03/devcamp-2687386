const express = require('express')
const mongoose = require ('mongoose')
//definir ruta
const router = express.Router()
const CourseModel = require('../models/courseModel')

router.get('/', async (req, res)=>{
    try{
        const courses = await CourseModel.find()
        if(courses.length > 0){
            res.
            status(200).
            json({
                success: true,
                data: courses
            })
        }else{
            res.status(400)
            .json({
            success: false,
            message: 'No hay courses'
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

//course por id
router.get('/:id', async (req, res)=>{
    //Extraer el id del course del parametro url
    try{
        courseId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(courseId)){
            res.status(500)
            .json({
                success: false,
                msg: "identificador invalido"
                })
        }else{
            const course = await CourseModel.findById(courseId)
            if(course){
                res.
                status(200)
                .json({
                    success: true,
                    data: course
            })
            }else{
                res
                .status(400)
                .json({
                    success: false,
                    message: `No hay courses con id: ${courseId}`
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

//crear course
router.post('/', async (req, res)=>{
    try{
        const newCourse = await CourseModel.create(req.body)
        res.
        status(400)
        .json({
        success: true,
        data: newCourse
    })
    }catch(error){
        res.status(400)
        .json({
            success: false,
            message: error.message
        })
    }
})

//editar course por id
router.put('/:id', async (req, res)=>{
    try{
        const courseId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(courseId)){
            res.status(500)
            .json({
                success: false,
                msg: "identificador invalido"
            })
        }else{
            const updCourse =
                await CourseModel.
                findByIdAndUpdate(courseId, 
                    req.body, 
                    {
                    new: true
                })
            if(updCourse){
                res.json({
                    success: true,
                    data:updCourse
                })
            }else{
                res
                .status(400)
                .json({
                    success: false,
                    message: `No hay bootcamps con id: ${courseId}`
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

//eliminar bootcamp
router.delete('/:id', async (req, res)=>{
    try{
        const courseId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(courseId)){
            res.status(500)
            .json({
                success: false,
                msg: "identificador invalido"
            })
        }else{
            const delCourse = 
            await CourseModel.findByIdAndDelete(courseId)

            if(delCourse){
                res.json({
                    success: true,
                    data: delCourse
                })
            }else{
                res
                .status(400)
                .json({
                    success: false,
                    message: `No hay courses con id: ${courseId} por lo tanto no se puede eliminar`
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