const mongoose = require("mongoose");

const MockTestSchema = new mongoose.Schema({
  level: { type: String, enum: ["easy", "medium", "difficult"], required: true },
  chapter: { type: mongoose.Schema.Types.ObjectId, ref: "chapter", required: true }, // References the Chapter
  questions: [
    {
      question: { type: String, required: true },
      options: [{ type: String }], // Example: [Option A, Option B, Option C, Option D]
      correctAnswer: { type: String, required: true }, // Example: Option A
    },
  ],
});

module.exports = mongoose.model("mockTest", MockTestSchema);

