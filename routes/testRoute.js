const express = require('express')
const {addQuestion, questionLists, removeQuestion} = require('../controllers/testController');
const upload = require('../middleware/multer');


const testRouter = express.Router();
testRouter.post('/add', upload.fields([{name: 'image1', maxCount:1}, {name:'image2',maxCount:1}]), addQuestion);
testRouter.post('/remove',removeQuestion)
testRouter.get('/list',questionLists)

module.exports = testRouter;

