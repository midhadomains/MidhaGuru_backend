const Subject = require("../models/test/Subject");
const Class = require("../models/test/class");

// Get all subjects for a specific class
exports.getSubjectsByClass = async (req, res) => {
  const { classId } = req.params;

  try {
    const subjects = await Subject.find({ class: classId }).populate("class", "name");
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific subject by ID
exports.getSubjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const subject = await Subject.findById(id).populate("class", "name");
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new subject
exports.addSubject = async (req, res) => {
  const { name, class: classId } = req.body;

  try {
    // Ensure the class exists
    const classExists = await Class.findById(classId);
    if (!classExists) {
      return res.status(404).json({ message: "Class not found" });
    }

    const newSubject = new Subject({ name, class: classId });
    const savedSubject = await newSubject.save();
    res.status(201).json(savedSubject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing subject
exports.updateSubject = async (req, res) => {
  const { id } = req.params;
  const { name, class: classId } = req.body;

  try {
    const updatedSubject = await Subject.findByIdAndUpdate(
      id,
      { name, class: classId },
      { new: true }
    );

    if (!updatedSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    res.status(200).json(updatedSubject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a subject
exports.deleteSubject = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSubject = await Subject.findByIdAndDelete(id);
    if (!deletedSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    res.status(200).json({ message: "Subject deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
