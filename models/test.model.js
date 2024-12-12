const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    class: { type: String, require: true },
    subject: { type: String, require: true }

}, {
    versionKey: false
})

const TestModel = mongoose.model('test', testSchema);

module.exports = { TestModel };