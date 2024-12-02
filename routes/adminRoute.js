const express = require('express');
const {
  addBoard,
  addClass,
  addSubject,
  addChapter,
  addMockTest,
  addQuestion,
  deleteBoard,
  deleteClass,
  deleteSubject,
  deleteChapter,
  deleteMockTest,
  deleteQuestion,
} = require('../controllers/adminController');

const router = express.Router();

// Add routes
router.post('/board', addBoard);
router.post('/class', addClass);
router.post('/subject', addSubject);
router.post('/chapter', addChapter);
router.post('/mocktest', addMockTest);
router.post('/question', addQuestion);

// Delete routes
router.delete('/board/:id', deleteBoard);
router.delete('/class/:id', deleteClass);
router.delete('/subject/:id', deleteSubject);
router.delete('/chapter/:id', deleteChapter);
router.delete('/mocktest/:id', deleteMockTest);
router.delete('/question/:id', deleteQuestion);

module.exports = router;
