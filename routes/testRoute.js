const express = require('express')
const {getBoards, getClasses, getSubjects, getChapters, getMockTests, getQuestions} = require('../controllers/testController')

const router =express.Router();

router.get('/boards', getBoards)
router.get('/classes/:boardId', getClasses)
router.get('/subjects/:classId', getSubjects)
router.get('/chapters/:subjectId', getChapters)
router.get('/mocktests/:chapterId', getMockTests)
router.get('/questions/:mockTestId', getQuestions)

module.exports = router