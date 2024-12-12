const Class = require("../models/test/Class");
const Board = require("../models/test/board");

// Get all classes for a specific board
exports.getClassesByBoard = async (req, res) => {
  const { boardId } = req.params;

  try {
    const classes = await Class.find({ board: boardId }).populate("board", "name");
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific class by ID
exports.getClassById = async (req, res) => {
  const { id } = req.params;

  try {
    const singleClass = await Class.findById(id).populate("board", "name");
    if (!singleClass) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.status(200).json(singleClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new class
exports.addClass = async (req, res) => {
  const { name, board } = req.body;

  try {
    // Ensure the board exists
    const boardExists = await Board.findById(board);
    if (!boardExists) {
      return res.status(404).json({ message: "Board not found" });
    }

    const newClass = new Class({ name, board });
    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing class
exports.updateClass = async (req, res) => {
  const { id } = req.params;
  const { name, board } = req.body;

  try {
    const updatedClass = await Class.findByIdAndUpdate(
      id,
      { name, board },
      { new: true }
    );

    if (!updatedClass) {
      return res.status(404).json({ message: "Class not found" });
    }

    res.status(200).json(updatedClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a class
exports.deleteClass = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedClass = await Class.findByIdAndDelete(id);
    if (!deletedClass) {
      return res.status(404).json({ message: "Class not found" });
    }

    res.status(200).json({ message: "Class deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
