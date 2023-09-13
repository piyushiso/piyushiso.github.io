const express = require('express')

// Rounter instance.
const router = express.Router()

// GET all workouts.
router.get("/", (req, res) => {
    res.json({msg: 'Get all workouts'})
})

// GET a single workout.
router.get("/:id", (res, req) => {
    res.json({msg: 'GET a single workout'})
})

// POST a new workout.
router.post("/", (res, req) => {
    res.json({msg: "POST a single workout."})
})


// DELETE a single workout.
router.delete("/:id", (res, req) => {
    res.json({msg: "DELETE a single workout."})
})

// UPDATE a single workout.


module.exports = router