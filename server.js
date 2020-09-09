const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(express.json()); 

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo Atlas
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log(error));

// Use Routes
app.use('/api/items', require('./routes/api/items'))
app.use('/api/users', require('./routes/api/users'))


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on Port ${port}`))