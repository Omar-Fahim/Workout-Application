require('dotenv').config() // It reads your .env file (a plain text file with key=value pairs) and loads those variables into process.env
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json()) // This middleware parses incoming JSON requests and puts the parsed data in req.body
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


// routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>
        // listen for requests
        app.listen(process.env.PORT,() => {
            console.log('connected to db & listening on port',process.env.PORT)
        })
    )
    .catch((error) =>{
        console.log(error)
    })



