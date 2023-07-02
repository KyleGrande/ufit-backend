const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackModel = new Schema({
 
  programId: { type: ObjectId, required: true },
  userId: { type: ObjectId, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
 
});

module.exports = mongoose.model("feedback", feedbackModel);
//feedback{id, program_id, user_id, comment, rating[1-10]
