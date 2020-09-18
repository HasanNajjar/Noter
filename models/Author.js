const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const authorSchema = new Schema({

    name: {
        type: String,
    },
    stories: [{type: Schema.Types.ObjectId, ref: 'Story'}]

});

module.exports = Author = mongoose.model('Author', authorSchema);