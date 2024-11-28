const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    subject: {type:String, required: true},
    image: {type: Array},
    question: {type:String, required: true},
    option: {type: Array, required: true},
    
})

const testModel = mongoose.models.questions || mongoose.model('questions', testSchema)
module.exports = testModel;
