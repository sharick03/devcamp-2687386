const mongoose = require('mongoose')

//definir esquema bootcamp
const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
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
        maxlength:[
            10, "Telefono no debe ser mayor a 10"
        ],
        minlength:[
            7, "Telefono debe tener al menos 7 digitos"
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
