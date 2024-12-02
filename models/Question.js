const { default: mongoose } = require("mongoose");

const questionSchema = new mongoose.Schema({
    text: {type: String, required: true},
    options: [{type: String, required: true}],
    correctAnswer: {type:String, required:true},
    mockTest: {type: mongoose.Schema.Types.ObjectId, ref: 'MockTest', required: true},
    timer: {type: Number, required: true}
});

module.exports = mongoose.model('Question', questionSchema)