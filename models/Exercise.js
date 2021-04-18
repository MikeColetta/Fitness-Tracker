const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    type: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for transaction"
      },
      duration: {
        type: Number,
        required: "Enter a time"
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
