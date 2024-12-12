const express = require("express");
const {
  getMockTestsByChapterAndLevel,
  getMockTestById,
  addMockTest,
  updateMockTest,
  deleteMockTest,
} = require("../controllers/mocktestControllers");

const mockTestRouter = express.Router();

// Get all mock tests for a specific chapter and level
mockTestRouter.get("/lists", getMockTestsByChapterAndLevel);

// Get a specific mock test by ID
mockTestRouter.get("/:id", getMockTestById);

// Add a new mock test
mockTestRouter.post("/add", addMockTest);

// Update a mock test
mockTestRouter.put("/:id", updateMockTest);

// Delete a mock test
mockTestRouter.delete("/:id", deleteMockTest);

module.exports = mockTestRouter;
