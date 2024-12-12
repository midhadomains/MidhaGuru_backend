const MockTest = require("../models/test/mocktest");
const Chapter = require("../models/test/chapter");

// Get all mock tests for a specific chapter and level
exports.getMockTestsByChapterAndLevel = async (req, res) => {
  const { chapterId, level } = req.query;

  try {
    const mockTests = await MockTest.find({ chapter: chapterId, level }).populate("chapter", "name");
    if (mockTests.length === 0) {
      return res.status(404).json({ message: "No mock tests found for the specified chapter and level." });
    }
    res.status(200).json(mockTests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific mock test by ID
exports.getMockTestById = async (req, res) => {
  const { id } = req.params;

  try {
    const mockTest = await MockTest.findById(id).populate("chapter", "name");
    if (!mockTest) {
      return res.status(404).json({ message: "Mock test not found." });
    }
    res.status(200).json(mockTest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new mock test
exports.addMockTest = async (req, res) => {
  const { level, chapter, questions } = req.body;

  try {
    // Ensure the chapter exists
    const chapterExists = await Chapter.findById(chapter);
    if (!chapterExists) {
      return res.status(404).json({ message: "Chapter not found." });
    }

    const newMockTest = new MockTest({ level, chapter, questions });
    const savedMockTest = await newMockTest.save();
    res.status(201).json(savedMockTest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a mock test
exports.updateMockTest = async (req, res) => {
  const { id } = req.params;
  const { level, chapter, questions } = req.body;

  try {
    const updatedMockTest = await MockTest.findByIdAndUpdate(
      id,
      { level, chapter, questions },
      { new: true }
    );

    if (!updatedMockTest) {
      return res.status(404).json({ message: "Mock test not found." });
    }

    res.status(200).json(updatedMockTest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a mock test
exports.deleteMockTest = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMockTest = await MockTest.findByIdAndDelete(id);
    if (!deletedMockTest) {
      return res.status(404).json({ message: "Mock test not found." });
    }

    res.status(200).json({ message: "Mock test deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
