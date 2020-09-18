const config = require('config')
const jwt = require('jsonwebtoken')


// get the token from the frontend
function auth(req, res, next) {
    const token = req.header('x-auth-token');

    //Check token
    if(!token) return res.status(401).json({Error: 'No token, authorisation denied' }) // incorrect/unauthorised permissions
        

    try {
    //Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    //
    req.user = decoded;
    next()
    } catch(e) {
        res.status(400).json( {Error: 'Invalid token'} ) 
    }
}

module.exports = auth;