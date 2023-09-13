const express = require('express')
const workoutMDL = require("../models/workoutModel")

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
router.post("/", async (req, res) => {
    const {title, load, reps} = req.body
    
    try{
        const workout = await workoutMDL.create({title, load, reps})
        res.status(200).json(workout)
    }catch(error){
        // Status 400: Error.
        res.status(400).json({error: error.message})
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