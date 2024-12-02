const { default: mongoose } = require("mongoose");

const mockTestSchema = new mongoose.Schema({
    type: {type: String, enum: ['easy', 'moderate', 'hard'], required: true},
    chapter: {type: mongoose.Schema.Types.ObjectId, ref: 'Chapter', required: true},
    questions: [{type: mongoose.Schema.Types.ObjectId, ref:'Question'}]
})

module.exports=mongoose.model('MockTest',mockTestSchema)