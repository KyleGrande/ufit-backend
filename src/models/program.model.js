const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const workoutDetailSchema = new Schema({
//   name: { type: String },
//   weight: { type: String }, //change to array of movents
// });

// const workoutSchema = new Schema({
//   name: { type: String },
//   workoutDetail: [workoutDetailSchema], //change to array of movents
// });

const sessionSchema = new Schema({
  name: { type: String },
  movementId: [{ type: ObjectId }], //change to array of movents
});

const programModel = new Schema({
  programName: { type: String, required: true },
  programDescription: { type: String, required: true },
  programCategory: { type: String, required: true },
  userId: { type: ObjectId, required: false },
  session: [sessionSchema],
  // workout: [workoutSchema],
});

module.exports = mongoose.model("program", programModel);

//program{id, name, description, category, user_id, session[{name, movement(id)}]}
// program --> workout { id, name:"workout A",  detail: [{ name: "squat", weight:"5x5 olbs", speed }
