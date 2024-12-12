const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Example: 6, 7, 8, 9, 10
  board: { type: mongoose.Schema.Types.ObjectId, ref: "board", required: true }, // References the Board
});

module.exports = mongoose.model("class", ClassSchema);
