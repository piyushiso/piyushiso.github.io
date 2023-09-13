const express = require('express')

// Accessing controllers
const {getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout} = require("../controllers/workoutController")

// Rounter instance.
const router = express.Router()

// Workout model instance.
const workoutMDL = require("../models/workoutModel")

// GET all workouts.
router.get("/", getWorkouts)

// GET a single workout.
router.get("/:id", getWorkout)

// POST a new workout.
router.post("/", createWorkout)

// DELETE a single workout.
router.delete("/:id", deleteWorkout)

// UPDATE a single workout.
router.patch("/:id", updateWorkout)

module.exports = router