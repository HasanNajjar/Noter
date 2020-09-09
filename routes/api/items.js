const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// Public
router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
})

// @route POST api/items
// @desc Create An Item
// Public - Would be private if there was authentication
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete An Item
// Public - Would be private if there was authentication
router.delete('/:id', (req, res) => {
Item.findById(req.params.id)
 .then(item => item.remove().then(() => res.json({success: true})))
 .catch(error => res.status(404).json({success: false}))    
})


module.exports = router;