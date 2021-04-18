const router = require('express').Router();
const Workout = require("../models/workout.js")
const Exercise = require("../models/exercise.js")

router.get("api/workouts", (req, res) => {
    Workout.find()
    .sort({ date: -1 })
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// router.get("api/exercise", (req, res) => {
//     Exercise.find()
//     .then(dbExercise => {
//         res.json(dbExercise);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });


module.exports = router;