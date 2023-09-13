// Accessing .env file contents.
require('dotenv').config()

// Access express' library.
const express = require('express')

// Invoking instance to create an express app.
const app = express()

// Managing Routes: GET method on index/localhost/root folder.
app.get("/", (req, res) => {
    res.json({msg: "Welcome to the app"})
})

// Listen requests.
app.listen(process.env.PORT, () => {
    console.log("Working/listening on port ")
})
