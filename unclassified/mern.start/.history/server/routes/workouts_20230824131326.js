const express = require('express')

// Accessing controllers
const {create}

// Rounter instance.
const router = express.Router()

// Workout model instance.
const workoutMDL = require("../models/workoutModel")

// GET all workouts.
router.get("/", (req, res) => {
    res.json({msg: 'Get all workouts'})
})

// GET a single workout.
router.get("/:id", (req, res) => {
    res.json({msg: 'GET a single workout'})
})

// POST a new workout.
router.post("/", async (req, res) => {
    const {title, load, reps} = req.body
    
    try{
        const workout = await workoutMDL.create({title, load, reps})
        res.status(200).json(workout)   // Status 200: Success.
    }catch(error){
        res.status(400).json({error: error.message})    // Status 400: Error.
    }
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