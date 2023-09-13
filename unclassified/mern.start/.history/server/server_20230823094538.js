// Accessing .env file contents.
require('dotenv').config()

// Access express' library.
const express = require('express')
// Instance of Mongoose.
const mongoose = require("mongoose")
// Instance of workouts.js
const workoutRoutes = require("./routes/workouts")

// Invoking instance to create an express app.
const app = express()

// Managing Middleware: Used to mount the specified middleware functions at the specified path.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Workout routes.
app.use("/api/workouts", workoutRoutes)

// Connect DB.
mongoose.c

// Listen requests.
app.listen(process.env.PORT, () => {
    console.log("Working/listening on port ", process.env.PORT)
})

