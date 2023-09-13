const express = require('express')

// Rounter instance.
const router = express.Router()

router.get("/", (req, res) => {
    res.json({msg: 'Get all workouts'})
})

module.exports = router