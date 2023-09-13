const express = require('express')

// Rounter instance.
const router = express.Router()

// Get all workouts.
router.get("/", (req, res) => {
    res.json({msg: 'Get all workouts'})
})

// Get a single workout.
router.get("/:id", (res, req) => {
    res.json({msg: 'Get a single workout'})
})

// 


module.exports = router