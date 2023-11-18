const mongoose = require('mongoose')
const bcryptjs= require('bcryptjs') 
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nombre requerido"]
    },
    email:{
        type: String,
        unique:  [true, "Email repetido"],
        required:[true,"Email requerido"],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
        "email invalido"]
    },
    password:{
        type: String,
        required: [true, "password requerido"],
        maxlength: [6, "password muy largo"],
        select: false
    },
    role: {
        type: String,
        enum: ["admin","user","publisher"]
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', async function(){
    //generar la sal
    const sal = await bcryptjs.genSalt(10)
    //encriptar la contraseña utilizando la sal
    this.password = await bcryptjs.hash(this.password, sal)
})

//metodo para comparar password del usuario vs password del payload
userSchema.methods.comparePassword = async function(password){
    return bcryptjs.compare(password, this.password)
}

module.exports = mongoose.model('User', userSchema)