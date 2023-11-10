const mongoose = require('mongoose')
//definir esquema
const CourseShema = new mongoose.Schema({
    title:{
        type: String,
        unique: [true, "Titulo ya existente"],
        required: [
            true,
            "Titulo requerido"
        ],
        maxLength:[
            30, "Titulo no debe tener maximo 30 caracteres"
        ],
        minLength:[
            10, "Titulo debe tener minimo 10 caraceres"
        ]
    },
    description:{
        type: String,
        required: [
            true,
            "descripcion requerida"
        ],
        min:[
            10, "descripcion debe tener minimo 10 caraceres"
        ]
    },
    weeks:{
        type: Number,
        required: [
            true,
            "weeks requerida"
        ],
        max: [
            9, "El numero maximo de semanas debe ser 9"
        ]
    },
    enroll_cost:{
        type: Number,
        required: [
            true,
            "enroll_cost requerido"
        ]
    },
    minimum_skill:{
        type: String,
        required: [
            true,
            "minimum_skill requerido"
        ],
        enum: [
            "Beginner",
            "Intermediate",
            "Advanced",
            "Expert"
        ]
    }
})
module.exports = mongoose.model("Course", CourseShema)