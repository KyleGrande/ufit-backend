const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackingDataSchema = new Schema({
  trackingType: { type: String, required: true },
  reps: { type: Number, required: false },
  sets: { type: Number, required: false },
  rounds: { type: Number, required: false },
  roundSec: { type: Number, required: false },
  restMin: { type: Number, required: false },
  restSec: { type: Number, required: false },
  genMin: { type: Number, required: false },
  genSec: { type: Number, required: false },
  speed: { type: Number, required: false },
  weight: {type:Number, required: false },
});

const movementSchema = new Schema({
  section: { type: String, required: true },
  movementName: { type: String, required: true },
  movementDescription: { type: String, required: false },
  movementLink: { type: String, required: false },
  trackingData: trackingDataSchema,
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
