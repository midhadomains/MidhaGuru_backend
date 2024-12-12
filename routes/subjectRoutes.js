const express = require("express");
const {
  getSubjectsByClass,
  getSubjectById,
  addSubject,
  updateSubject,
  deleteSubject,
} = require("../controllers/subjectControllers");

const subjectRouter = express.Router();

// Get all subjects for a specific class
subjectRouter.get("/lists/:classId", getSubjectsByClass);

// Get a specific subject by ID
subjectRouter.get("/:id", getSubjectById);

// Add a new subject
subjectRouter.post("/add", addSubject);

// Update a subject
subjectRouter.put("/:id", updateSubject);

// Delete a subject
subjectRouter.delete("/:id", deleteSubject);

module.exports = subjectRouter;
