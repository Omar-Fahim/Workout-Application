
const  express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/',getWorkouts)


//GET a single workout
router.get('/:id',getWorkout)


// POST a new workout
router.post('/',createWorkout )





// DELETE a new workout
router.delete('/:id',deleteWorkout)

//UPDATE a workout
router.patch('/:id',updateWorkout)




// mongoose => MongoDB ODM (Object Data Modeling) library for Node.js and MongoDB (extra layer around MongoDB).
// It provides a schema-based solution to model your application data.
// Mongoose is used to interact with MongoDB databases in a more structured way (give you methods).
module.exports = router