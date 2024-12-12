const mongoose = require("mongoose");

const ChapterSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Example: Algebra, Geometry
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "subject", required: true }, // References the Subject
});

module.exports = mongoose.model("chapter", ChapterSchema);
