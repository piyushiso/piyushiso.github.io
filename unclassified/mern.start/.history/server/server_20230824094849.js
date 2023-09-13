// Accessing .env file contents.
require('dotenv').config()

// Access express' library.
const express = require('express')
// Instance of Mongoose.
const mongoose = require("mongoose")
// Instance of workouts.js
const workoutRoutes = require("./routes/workouts")

// Invoking instance to create an express app.
const app = express()

// Managing Middleware: Used to mount the specified middleware functions at the specified path.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Workout routes.
app.use("/api/workouts", workoutRoutes)
// CONNECT DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => 
        // Listen requests.
        app.listen(process.env.PORT, () => {
            console.log("Connected to the DB, & Working/listening on port ", process.env.PORT)
        })
    ).catch(err => {
        console.log(err)
    })


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.MONGO_URI;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);