const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    customKey : {
        type : String
    },
    name : {
        type : String,
        require : true
    },
    email : {
        type :String,
        require: true,
        unique : [true, "Email already present"],
    },
    password : {
        type : String,
        require : true
    },
    phone : {
        type : Number,
        minlength : 10,
        maxlength : 10,
    },
    isAdmin : {
        type : Boolean,
        require : true,
        default : false
    },
},{
    timestamps : true
})

//exporting user collection
const User = new mongoose.model('User', userSchema);
module.exports = User;