const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const typeTrackingSchema = new Schema({
  trackingType: { type: String },
  sets: { type: Number },
  reps: { type: Number },
  rounds: {type: String}, 
  roundMin:{type: String}, 
  roundSec: {type: String},
  restMin: {type: String},
  restSec: {type: String},
});
const movementModel = new Schema({
  movementId: { type: String, required: false },
  section: { type: String, required: true },
  movementName: { type: String, required: true },
  movementDescription: { type: String, required: true },
  movementLink: { type: String, required: true },
  typeTracking: typeTrackingSchema,
});

module.exports = mongoose.model("movement", movementModel);
//movement{id, section, name, typeTracking{sets,reps}, movementDescription, movementLink}
