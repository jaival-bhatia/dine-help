const mongoose = require('mongoose');


// connection to mongodb server
mongoose.connect('mongodb+srv://vincetq:1pieceritZ@cluster0.0mw8vor.mongodb.net/dinehelp').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {console.log(err)})