const router = require('express').Router();
const Workouts = require("../../models/Workout")

router.get("api/workouts", (req, res) => {
    Workouts.find({})
    .sort({ date: -1 })
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// router.post("api/workout/", (req, res) => {

// });


module.exports = router;