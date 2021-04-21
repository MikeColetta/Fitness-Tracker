const router = require("express").Router();
const Workout = require("../models/workout.js")


//getLastWorkout
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
            
        });
});

//addExercise
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
    )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//createWorkout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//getWorkoutsInRange
router.get("/api/workouts/range", (req, res) => {
    Workout.find()
        .sort({ date: -1 })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
})

module.exports = router;