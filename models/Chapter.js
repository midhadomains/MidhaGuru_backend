const { default: mongoose } = require("mongoose");

const chapterSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    subject: {type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true}
})

module.exports = mongoose.model('Chapter', chapterSchema)