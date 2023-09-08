const Order = require("../models/Order");
const express = require("express");
const router = express.Router();
const shortid = require('shortid');
const Product = require("../models/Product");
//function to create order

exports.createOrder = async (req, res) => {
    try{
        const  buyerId = req.body.buyerId
        const productId = req.body.productId
        const {quantity} = req.body
        const product = await Product.find({_id : productId})
        let counter = 0 
        let totalPrice = 0
        while( counter < product.length){
            totalPrice = totalPrice + product[counter].price* Number(quantity)
            counter++
        }
        const order = new Order({
            buyerId,
            products : [
                {
                    productId,
                    quantity
                }
            ],
            totalPrice
        })
        if(order){
            await order.save();
            res.status(201).send("order created successfully")
        }else{
            res.status(400).send("order not created")
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message : "Something went wrong"
        })
    }
}


//function to delete order
exports.deleteOrder = async (req, res) => {
    try{
        const order =  await Order.findByIdAndDelete(req.params.id)
            if(!order || !req.params.id){
                res.send("Error occured")
            }else{ 
                res.json({message:"Order deleted successfully",
            })
            }
    } catch(err){
        console.log(err);
    res.send("Something went wrong")}

}


// function to find order

exports.findOrder = async (req, res) => {
    try{
        
        const orders = await Order.find(req.query)
        if(!orders){
            res.status(404).send("order not found")
        }else{
            res.status(200).json(orders)
        }
        
    
    }catch(err){
        console.log(err);
        res.status(500).json({
            message : "Something went wrong"
        })
    }
}


// code to update status of order
exports.updateStatus = async (req, res) => {
    try{
        const order = await Order.findOneAndUpdate({_id : req.params.id}, {$set:  {status : req.body.status}})
            if(!order){
                res.send("Error occured")
            }else{ 
                res.json({message:"Status updated successfully",
            })
            }
    }catch(err){
        console.log(err);
        res.status(500).json({message:"something went wrong"})
    }
}

