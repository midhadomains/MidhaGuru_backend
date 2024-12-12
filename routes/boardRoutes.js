const express = require("express");
const { getAllBoards, addBoard } = require("../controllers/boardControllers");


const boardRouter = express.Router();

// Routes for Chapters
boardRouter.get("/lists", getAllBoards); // Get all chapters for a specific subject
boardRouter.post("/add", addBoard); // Add a new chapter
// boardRouter.get("/:id", getChapterById); // Get a specific chapter by ID
// boardRouter.put("/:id", updateChapter); // Update an existing chapter
// boardRouter.delete("/:id", deleteChapter); // Delete a chapter

module.exports = boardRouter;
