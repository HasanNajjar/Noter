const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../../middleware/auth')

const User = require('../../models/User')

// POST api/auth
// Authenticate a user
router.post('/', (req, res) => {
    const {email, password} = req.body; 

    // validate for email and password
    if(!email || !password ) {
        return res.status(400).json({Error: 'Input fields are empty!'}) 
    }

    // check if email is in use. if not create a user with the given email
    User.findOne({ email })
        .then(user => {
            if(!user) {
                return res.status(400).json({Error: 'User does not exist!'})
            }
            
            // compare plain text password to the hashed password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({Error: 'Invalid Username or Password!'}) // if it doesnt match throw an error

                    jwt.sign(
                        {id: user.id},
                        config.get('jwtSecret'),
                        { expiresIn: 3600 }, // 1 hour
                        (error, token) => {
                            if(error) throw error;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        } 
                    )
                })
        })
});

// GET api/auth/user
// get user data
// private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
})


module.exports = router;