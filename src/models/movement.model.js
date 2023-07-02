const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const typeTrackingSchema = new Schema({
  sets: { type: Number },
  reps: { type: Number },
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
