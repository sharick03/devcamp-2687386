const mongoose = require('mongoose')

const ReviewShema = new mongoose.Schema({
    title:{
        type: String,
        unique: [true, "Titulo ya existente"],
        required: [
            true,
            "Titulo requerido"
        ],
        maxLength:[
            20, "Titulo debe tener maximo 20 caracteres"
        ]
    },
    text:{
        type: String,
        required: [
            true,
            "texto requerido"
        ],
        maxLength:[
            50, "descripcion debe tener maximo 50 caracteres"
        ]
    },
    rating:{
        type: Number,
        required: [
            true,
            "rating requerida"
        ],
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            "La calificacion debe ir del 1 al 10"
        ]
    }
})
module.exports = mongoose.model("Review", ReviewShema)