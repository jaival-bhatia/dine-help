const mongoose = require('mongoose');
const validator = require('validator');
const User = require('./User');
const Product = require('./Product');

//defining order schema
const orderSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    orderItems : [{
        name : {
            type : String,
            required : true
        },
        qty : {
            type : Number,
            required : true
        },
        image : {
            type : String,
            required : true
        },
        product : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : "Product"
        }
    }],
    shippingAddress : {
        address : {
            type : String,
            required : true
        },
        postalcode : {
            type : Number,
            required : true
        },
        country : {
            type : String,
            required : true
        }
    },
    paymentMethod : {
            type : String,
            required : true,
            default : "COD"
    },
    paymentResult : {
        id : {
            type : String
        },
        status : {
            type : String
        },
        updateTime : {
            type : String
        }
    },
    isPaid : {
        type : Boolean,
        default : false,
        required : true
    },
    paidAt : {
        type : Date
    },
    isDelivered : {
        type : Boolean,
        default : false,
        required : true
    },
    deliveredAt : {
        type : Date
    }
},{
    timestamps : true
})

//collection for Order
const Order = new mongoose.model('Order', orderSchema);
module.exports = Order;