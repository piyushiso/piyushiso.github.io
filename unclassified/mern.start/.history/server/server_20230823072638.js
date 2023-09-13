// Access express' library.
const express = require('express')

// Invoking instance to create an express app.
const app = express()

// GET method on index/localhost/root folder.
app.get("/", (req, res) => {
    res.json()
})

// Listen requests.
app.listen(4000, () => {
    console.log("Working/listening on port 4000.")
})