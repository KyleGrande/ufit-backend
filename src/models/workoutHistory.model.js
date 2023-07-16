const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roundSchema = new Schema({
  sets: { type: Number },
  reps: { type: Number },
});

const workoutHistoryModel = new Schema({
  name: { type: String, required: true },
  userId: { type: ObjectId, required: true },
  programId: { type: ObjectId, required: true },
  workoutName: { type: String, required: true },
  workoutDate: { type: Date, required: true },
  workoutWeight: { type: String, required: true },
  rounds: roundSchema,
});

module.exports = mongoose.model("workoutHistory", workoutHistoryModel);

// workoutHistory: { id, name, programId, workoutName, workoutDate, workoutWeight, rounds: { sets, reps} }
