const { default: mongoose } = require("mongoose");

const classSchema = new mongoose.Schema({
    name: {type: String, required: true},
    board: {type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true}
})

module.exports=mongoose.model('Class', classSchema)