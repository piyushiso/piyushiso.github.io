const express = require('express')

// Rounter instance.
const router = express.Router()

// GET all workouts.
router.get("/", (req, res) => {
    res.json({msg: 'Get all workouts'})
})

// GET a single workout.
router.get("/:id", (res, req) => {
    res.json({msg: 'Get a single workout'})
})

// POST a new workout.
router.post("/", (res, req) => {
    res.json({msg: "Post a single workout."})
})


// POST a single workout.
router.post("/", (res, req) => {
    res.json({msg: "Post a single workout."})
})



module.exports = router