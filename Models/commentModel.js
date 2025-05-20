const mongoose = require('mongoose')

const commentsSchema = {
    firstName: String,
    lastName: String,
    experience: String
}

const Comment = mongoose.model('Comment', commentsSchema)

module.exports = Comment