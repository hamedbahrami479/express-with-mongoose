const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  points: { type: Number, default: 0 },
  happiness: { type: Number, default: 0 },
},

{ collection: "students"}

);

module.exports = mongoose.model("student", studentSchema);
