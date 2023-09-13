const express = require('express')

// Rounter instance.
const router = express.Router()

// Get all workouts.
router.get("/", (req, res) => {
    res.json({msg: 'Get all workouts'})
})

// 
router.post()

module.exports = router