const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Example: Mathematics, Science
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true }, // References the Class
});

module.exports = mongoose.model("Subject", subjectSchema);
