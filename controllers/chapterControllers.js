const Chapter = require("../models/test/Chapter");

// Get all chapters for a specific subject
exports.getChaptersBySubject = async (req, res) => {
  const { subjectId } = req.params;

  try {
    const chapters = await Chapter.find({ subject: subjectId }).populate("subject", "name");
    res.status(200).json(chapters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific chapter by ID
exports.getChapterById = async (req, res) => {
  const { id } = req.params;

  try {
    const chapter = await Chapter.findById(id).populate("subject", "name");
    if (!chapter) {
      return res.status(404).json({ message: "Chapter not found" });
    }
    res.status(200).json(chapter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new chapter
exports.addChapter = async (req, res) => {
  const { name, subject } = req.body;

  try {
    const newChapter = new Chapter({ name, subject });
    const savedChapter = await newChapter.save();
    res.status(201).json(savedChapter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a chapter
exports.updateChapter = async (req, res) => {
  const { id } = req.params;
  const { name, subject } = req.body;

  try {
    const updatedChapter = await Chapter.findByIdAndUpdate(
      id,
      { name, subject },
      { new: true }
    );
    if (!updatedChapter) {
      return res.status(404).json({ message: "Chapter not found" });
    }
    res.status(200).json(updatedChapter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a chapter
exports.deleteChapter = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedChapter = await Chapter.findByIdAndDelete(id);
    if (!deletedChapter) {
      return res.status(404).json({ message: "Chapter not found" });
    }
    res.status(200).json({ message: "Chapter deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
