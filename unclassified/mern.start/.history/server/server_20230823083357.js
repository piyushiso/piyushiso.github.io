// Accessing .env file contents.
require('dotenv').config()

// Access express' library.
const express = require('express')
const workoutRoutes = require("./routes/workouts")

// Invoking instance to create an express app.
const app = express()

// Managing Middleware: Used to mount the specified middleware functions at the specified path.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Managing Routes: GET request on index/localhost/root folder.
app.get("/", (req, res) => {
    res.json({msg: "Welcome to the app"})
})

app.use("", workoutRoutes)

// Listen requests.
app.listen(process.env.PORT, () => {
    console.log("Working/listening on port ", process.env.PORT)
})

