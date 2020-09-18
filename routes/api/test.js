const express = require('express');
const router = express.Router();

// Item Model
const Author = require('../../models/Author');
const Story = require('../../models/Story');

// api/test
router.get('/', (req, res) => {
    var bob = new Author({name: "bob smith"})

    bob.save(function(err) {
        if (err) return handleError(err)
        
        const story = new Story({
            title: "this is the title",
            author: bob._id
        })

        story.save().then(item => res.json(item))
    })
})

module.exports = router;