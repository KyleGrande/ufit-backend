const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackingDataSchema = new Schema({
  trackingType: { type: String, required: true },
  reps: { type: Number, required: true },
  sets: { type: Number, required: true },
  rounds: { type: Number, required: true },
  roundSec: { type: Number, required: true },
  restMin: { type: Number, required: true },
  restSec: { type: Number, required: true },
  genMin: { type: Number, required: true },
  genSec: { type: Number, required: true },
  speed: { type: Number, required: true },
});

const movementSchema = new Schema({
  section: { type: String, required: true },
  movementName: { type: String, required: true },
  movementDescription: { type: String, required: false },
  movementLink: { type: String, required: false },
  tracking: trackingDataSchema,
});

const historyModel = new Schema({
  sessionName: { type: String, required: false },
  programName: { type: String, required: false },
  restDays: { type: String, required: false },
  date: { type: Date, required: false },
  userId: { type: ObjectId, required: true },
  programId: { type: ObjectId, required: true },
  movements: [movementSchema],
});

module.exports = mongoose.model("history", historyModel);

// history: { id, name, programId, workoutName, workoutDate, workoutWeight, rounds: { sets, reps} }
/*HistoryDATA {
    _id: string;
    userID: string;
    programID: string;
    sessionName: string;
    restDays: string;
    date: date;
    movements: Object[    
    {
      section: string;
      movementName: string;
      trackingData: {
        trackingType: setsreps;
        reps: string | undefined;
        sets: string | undefined;
        weight: 45;
      }
{
      section: string;
      movementName: string;
      trackingData: {
        trackingType: timer;
        speed: 5;
        rounds: string | undefined;
        roundMin: string | undefined;
        roundSec: string | undefined;
        restMin: string | undefined;
        restSec: string | undefined;
        genMin: string | undefined;
        genSec: string | undefined;
      }
    ]];    
}*/
