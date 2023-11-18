const express = require('express')
const router = express.Router()
const UserModel = require('../models/usersModel')
const mongoose = require('mongoose')

//registro de usuarios
router.post('/registro', async(req, res)=>{
    try{
        const user = await UserModel.create(req.body)
        res.status(201).json({
            success: true,
            data: user
    })
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
    
})

//inicio de sesion
router.post('/login', async (req, res)=>{
    //1. NO LLEGA EMAIL O PASSWORD
    const {email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: 'Falta email o password'
        })
    }
    else{
        //2. LLEGA EMAIL, PERO EL USUARIO DE EMAIL NO EXISTE
        const user = await UserModel.findOne({email}).select("+password")
        if(!user){
            return res.status(400).json({
                success: false,
                message: 'Este usuario no existe'
            })
        }else{
            //3. SI LLEGA EMAIL, Y USUARIO EXISTE PERO LA CLAVE NO CORRESPONDE
            const isMatch = await user.comparePassword(password)
            if(isMatch){
                return res.status(200).json({
                    success: false,
                    message: "Usuario logueado exitosamete"
                })
            }else{
                return res.status(400).json({
                    success: false,
                    message: 'Credenciales incorrectas'
                })
            }
        }
    }
    
    
})

module.exports = router