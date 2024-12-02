const Board = require("../models/Board");
const Class = require('../models/Class');
const Subject = require('../models/Subject');
const Chapter = require('../models/Chapter');
const MockTest = require('../models/MockTest');
const Question = require('../models/Question');

const getBoards = async(req,res)=>{
    try{
        const boards= await Board.find();
        res.status(200).json(boards)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const getClasses = async(req,res)=>{
    try{
        const classes = await Class.find({board: req.params.boardId});
        res.status(200).json(classes)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}


const getSubjects = async(req,res)=>{
    try{
        const subjects = await Subject.find({class: req.params.classId});
        res.status(200).json(subjects)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const getChapters = async(req,res)=>{
    try{
        const chapters = await Chapter.find({subject: req.params.subjectId})
        res.status(200).json(chapters)

    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const getMockTests = async(req,res)=>{
    try{
        const mockTests = await MockTest.find({chapter: req.params.chapterId})
        res.status(200).json(mockTests)

    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const getQuestions = async(req,res)=>{
    try{
        const questions = await Question.find({mockTest: req.params.mockTestId})
        res.status(200).json(questions)

    }catch(error){
        res.status(500).json({error: error.message})

    }
}

module.exports = { getBoards, getClasses, getSubjects, getChapters, getMockTests, getQuestions };
