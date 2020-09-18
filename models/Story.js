const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const storySchema = new Schema({
    author: {
        type: Schema.Types.ObjectId, ref: 'Author',
        title: String
    },

});

module.exports = Story = mongoose.model('Story', storySchema);