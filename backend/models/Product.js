const mongoose = require('mongoose');
const validator = require('validator');
const User = require('./User');

//defining review schema
// const reviewSchema = new mongoose.Schema({
//     name : {
//         type : String,
//         required : true
//     },
//     rating : {
//         type : Number,
//         required : true
//     },
//     comment : {
//         type : String,
//         required : true
//     },
//     user : {
//         type : mongoose.Schema.Types.ObjectId,
//         required : true,
//         ref : 'User'
//     }
// })

// defining product schema
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    image : {
        type :String,
        required: true,
    },
    description : {
        type : String,
        required : true
    },
    // review : [reviewSchema]
},{
    timestamps : true
})

//exporting product 
const Product = new mongoose.model('Product', productSchema);
module.exports = Product;