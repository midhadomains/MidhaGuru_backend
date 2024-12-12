const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Example: CBSE, ICSE
});

module.exports = mongoose.model("board", BoardSchema);
