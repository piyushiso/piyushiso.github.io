const mongoose = reuiqre("mongoose")

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        
    }
})

module.exports