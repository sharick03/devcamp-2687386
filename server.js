const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const conectarDB = require('./config/db')

//dependencias de rutas
const bootcampRoutes = require('./routes/bootcampRoutes')
const courseRoutes = require('./routes/courseRotes')
const reviewRoutes = require('./routes/reviewRouter')

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

//rutas de prueba 
app.get('/prueba', (request, response)=>{
    response.send("Hola")
})

app.get('/prueba/:id', (request, response)=>{
    response.send(`Hola, ${ request.params.id }`)
})

//----------------- courses -------------------------------
//traer todos los courses
app.get('/courses', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui se mostraran todos los courses"
    })
})

//courses por id
app.get('/courses/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se mostraran los courses por id: ${req.params.id} `
    })
})

//crear courses
app.post('/courses', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui se creara un course"
    })
})

//editar courses por id
app.put('/courses/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se editara el course por id: ${req.params.id} `
    })
})

//eliminar courses
app.delete('/courses/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se eliminara el course por id: ${req.params.id} `
    })
})

//----------------- reviews -------------------------------
//traer todos las reviews
app.get('/reviews', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui se mostraran todas las reviews"
    })
})

//reviews por id
app.get('/reviews/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se mostraran las reviews por id: ${req.params.id} `
    })
})

//crear reviews
app.post('/reviews', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui se crearan las reviews"
    })
})

//editar reviews por id
app.put('/reviews/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se editaran las reviews por id: ${req.params.id} `
    })
})

//eliminar reviews
app.delete('/reviews/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se eliminaran las reviews por id: ${req.params.id} `
    })
})

//----------------- users -------------------------------
//traer todos los users
app.get('/users', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui se mostraran todos los users"
    })
})

//users por id
app.get('/users/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se mostraran los users por id: ${req.params.id} `
    })
})

//crear users
app.post('/users', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui se crearan los users"
    })
})

//editar users por id
app.put('/users/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se editaran los users por id: ${req.params.id} `
    })
})

//eliminar users
app.delete('/users/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se eliminaran los users por id: ${req.params.id} `
    })
})

app.listen( process.env.PUERTO , ()=>{
    console.log(`Servidor en ejecución: ${ process.env.PUERTO }`.bgYellow)
    
})