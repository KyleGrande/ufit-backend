const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sessionSchema = new Schema({
  name: { type: String },
  movementId: { type: ObjectId },
});
const programModel = new Schema({
  programName: { type: String, required: true },
  programDescription: { type: String, required: true },
  programCategory: { type: String, required: true },
  userId: {type: ObjectId, required: false},
  session: [sessionSchema]
});

module.exports = mongoose.model("program", programModel);
//program{id, name, description, category, user_id, session[{name, movement(id)}]}
