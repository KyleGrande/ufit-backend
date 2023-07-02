const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roundsModel = new Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  movementId: { type: ObjectId, required: true },
  userId: { type: ObjectId, required: true },
});

module.exports = mongoose.model("rounds", roundsModel);
//rounds{id, startTime, endTime, movement_id, user_id}
