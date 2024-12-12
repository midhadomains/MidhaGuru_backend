const express = require("express");
const {
  getClassesByBoard,
  getClassById,
  addClass,
  updateClass,
  deleteClass,
} = require("../controllers/classControllers");

const classRouter = express.Router();

// Get all classes for a specific board
classRouter.get("/lists/:boardId", getClassesByBoard);

// Get a specific class by ID
classRouter.get("/:id", getClassById);

// Add a new class
classRouter.post("/add", addClass);

// Update a class
classRouter.put("/update/:id", updateClass);

// Delete a class
classRouter.delete("/delete/:id", deleteClass);

module.exports = classRouter;
