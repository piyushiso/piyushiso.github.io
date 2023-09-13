const workout = require("../models/workoutModel")

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params
    const workouts =  await workout.findById(id)
    if(!workout)
        return res.status(404).json
}

// create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    // Add data to DB.
    try{
        const workout = await workoutMDL.create({title, load, reps})
        res.status(200).json(workout)   // Status 200: Success.
    }catch(error){
        res.status(400).json({error: error.message})    // Status 400: Error.
    }
}

// delete a workout

// update a workout

module.exports = {getWorkouts, createWorkout}