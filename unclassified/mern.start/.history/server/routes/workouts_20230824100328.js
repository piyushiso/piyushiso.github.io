const express = require('express')
const Workout = require("../models/")

// Rounter instance.
const router = express.Router()

// GET all workouts.
router.get("/", (req, res) => {
    res.json({msg: 'Get all workouts'})
})

// GET a single workout.
router.get("/:id", (req, res) => {
    res.json({msg: 'GET a single workout'})
})

// POST a new workout.
router.post("/", (req, res) => {
    const {title, load, reps} = req.body
    res.json({msg: "POST a single workout."})
})

// DELETE a single workout.
router.delete("/:id", (req, res) => {
    res.json({msg: "DELETE a single workout."})
})

// UPDATE a single workout.
router.patch("/:id", (req, res) => {
    res.json({msg: "UPDATE a single workout."})
})

module.exports = router