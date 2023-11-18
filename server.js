const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const conectarDB = require('./config/db')

//dependencias de rutas
const bootcampRoutes = require('./routes/bootcampRoutes')
const courseRoutes = require('./routes/courseRotes')
const reviewRoutes = require('./routes/reviewRouter')
const userRoutes = require('./routes/userRoutes')

//vincular archivo de configuracion
dotenv.config(
    { path : './config/.env'

    }
)

//CONECTAR A BD
conectarDB()

//Construir objeto app
const app = express()
app.use(express.json())

//conectar rutas a objeto app
app.use('/api/v1/devcamp/bootcamps', bootcampRoutes)
app.use('/api/v1/devcamp/courses', courseRoutes)
app.use('/api/v1/devcamp/reviews', reviewRoutes)
app.use('/api/v1/devcamp/auth', userRoutes)



app.listen( process.env.PUERTO , ()=>{
    console.log(`Servidor en ejecución: ${ process.env.PUERTO }`.bgYellow)
    
})