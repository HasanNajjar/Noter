const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../../models/User')

// POST api/users
// Register a new user
router.post('/', (req, res) => {
    const {name, email, password} = req.body; 

    // validate for missing fields
    if(!name || !email || !password ) {
        return res.status(400).json({Error: 'Input fields are empty!'}) 
    }

    // check if email is in use. if not create a user with the given email
    User.findOne({ email })
        .then(user => {
            if(user) {
                return res.status(400).json({Error: 'User with the email already exists!'})
            }

            const newUser = new User({
                name,
                email,
                password
            })

            // salt and hash the password. once done, send the json data to the server and register user
            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(newUser.password, salt, (error, hash) => {
                    if(error) throw error
                    newUser.password = hash
                    newUser.save()
                        .then(user => {
                            res.json({
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        })
                })
            })
        })
});

module.exports = router;