const Board = require("../models/Board");
const Chapter = require("../models/Chapter");
const Class = require("../models/Class");
const MockTest = require("../models/MockTest");
const Question = require("../models/Question");
const Subject = require("../models/Subject");


const addBoard = async(req , res)=>{
    try{
        const {name, description} = req.body;
        const newBoard = new Board({name, description})
        await newBoard.save()
        res.status(201).json({message: 'Board created successfully', board: newBoard});
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const addClass = async(req,res)=>{
    try{
        const {name, boardId} = req.body;
        const newClass = new Class({name, board: boardId})
        await newClass.save()
        res.status(201).json({message: 'Class created successfully', class: newClass});

    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const addMockTest = async(req,res)=>{
    try{
        const {name, type, chapterId}=req.body;
        const newMock = new MockTest({name, type, chapter:chapterId});
        await newMock.save()
        res.status(201).json({message: 'Mock List created successfully', mockTest: newMock});
    }catch(error){
        res.status(500).json({error: error.message})

    }
}

const addChapter = async(req,res)=>{
    try{
        const {name, description, subjectId} = req.body
        const newChapter = new Chapter({name, description, subject: subjectId})
        await newChapter.save()
        res.status(201).json({message: 'Chapter List created successfully', chapter: newChapter});
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const addSubject = async(req,res)=>{
    try{
        const {name, classId} = req.body
        const newSubject = new Subject({name, class: classId})
        await newSubject.save();
        res.status(201).json({message: 'Subject List created successfully', subject: newSubject});
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const addQuestion = async(req,res)=>{
    try{
        const {text, options, correctAnswer, mockTestId, timer} = req.body;
        const newQuestion = new Question({text, options, correctAnswer, mockTest: mockTestId, timer})
        await newQuestion.save();
        res.status(201).json({message: "Question List created successfully", question: newQuestion})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const deleteBoard = async (req, res) => {
    try {
        const { id } = req.params;
        const board = await Board.findByIdAndDelete(id);
        if (!board) return res.status(404).json({ message: 'Board not found' });
        res.json({ message: 'Board deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteClass = async (req, res) => {
    try {
        const { id } = req.params;
        const classItem = await Class.findByIdAndDelete(id);
        if (!classItem) return res.status(404).json({ message: 'Class not found' });
        res.json({ message: 'Class deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const subject = await Subject.findByIdAndDelete(id);
        if (!subject) return res.status(404).json({ message: 'Subject not found' });
        res.json({ message: 'Subject deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteChapter = async (req, res) => {
    try {
        const { id } = req.params;
        const chapter = await Chapter.findByIdAndDelete(id);
        if (!chapter) return res.status(404).json({ message: 'Chapter not found' });
        res.json({ message: 'Chapter deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteMockTest = async (req, res) => {
    try {
        const { id } = req.params;
        const mockTest = await MockTest.findByIdAndDelete(id);
        if (!mockTest) return res.status(404).json({ message: 'MockTest not found' });
        res.json({ message: 'MockTest deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findByIdAndDelete(id);
        if (!question) return res.status(404).json({ message: 'Question not found' });
        res.json({ message: 'Question deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { 
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
    deleteQuestion, };
