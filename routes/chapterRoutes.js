const express = require("express");
const {
  getChaptersBySubject,
  getChapterById,
  addChapter,
  updateChapter,
  deleteChapter,
} = require("../controllers/chapterControllers");

const chapterRouter = express.Router();

// Routes for Chapters
chapterRouter.get("/lists/:subjectId", getChaptersBySubject); // Get all chapters for a specific subject
chapterRouter.get("/:id", getChapterById); // Get a specific chapter by ID
chapterRouter.post("/add", addChapter); // Add a new chapter
chapterRouter.put("/update/:id", updateChapter); // Update an existing chapter
chapterRouter.delete("/delete/:id", deleteChapter); // Delete a chapter

module.exports = chapterRouter;
