const mongoose = require('mongoose')

//definir esquema bootcamp
const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, "Nombre ya existente"],
        required: [
            true,
            "Nombre requerido"
        ]
    },
    phone:{
        type: Number,
        required: [
            true,
            "Telefono requerido"
        ],
        max:[
            7777777777, "Telefono no debe ser mayor a 10"
        ],
        min:[
            //Poner numero de limite osea 7 numeros
            1111111, "Telefono debe tener al menos 7 digitos"
        ]
    },
    address:{
        type: String,
        required: [
            true,
            "Dirección requerida"
        ]
    },
    topics:{
        type: [String],
        enum: [
            "Backend",
            "Frontend",
            "Devops",
            "AI"
        ]
    },
    createdAt: Date
})

module.exports = mongoose.model("Bootcamp", BootcampSchema)
