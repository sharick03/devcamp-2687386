const express = require('express')

//definir ruta
const router = express.Router()

const BootcampModel = require('../models/bootcampModel')
const bootcampModel = require('../models/bootcampModel')

router.get('/', async (req, res)=>{
    //Utilizar el modelo para seleccionar todos los bootcamp de la bd
    const bootcamps =
    await BootcampModel.find()

    res.json({
        success: true,
        data: bootcamps
    })
})

//bootcamp por id
router.get('/:id', async (req, res)=>{
    //Extraer el id del bootcamp del parametro url
    bootcampId = req.params.id
    const bootcamp =
    await bootcampModel.findById(bootcampId)

    res.json({
        success: true,
        data: bootcamp
    })
})

//crear bootcamp
router.post('/', async (req, res)=>{
    const newBootcamp =
    await BootcampModel.create(req.body)
    res.json({
        success: true,
        data: newBootcamp
    })
})

//editar bootcamp por id
router.put('/:id', async (req, res)=>{
    const bootcampId = req.params.id
    const updBootcamp = 
    await BootcampModel.findByIdAndUpdate(bootcampId, req.body, {
        new: true
    })
    res.json({
        success: true,
        data:updBootcamp
    })
})

//eliminar bootcamp
router.delete('/:id', async (req, res)=>{
    const bootcampId = req.params.id
    const delBootcamp = 
    await BootcampModel.findByIdAndDelete(bootcampId)
    res.json({
        success: true,
        data: delBootcamp
    })
})

module.exports = router