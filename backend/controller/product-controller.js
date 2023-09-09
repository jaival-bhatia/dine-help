const Product = require("../models/Product");
const shortid = require('shortid');




// get product with any query
exports.getAllProduct = async (req, res) => {
  try {
    const product = await Product.find(req.query);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    res.send("something went wrong");
  }
};

// get product specific id
exports.getSpecific = async (req, res) => {

  try {
    const key = req.params.id
    const result = await Product.findOne({
      _id : key
    });
    if (result) {
      res.json(result);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    console.log(err);
  }
};

//create product
exports.createProduct = async (req, res) => {
  try {
    const customKey = shortid.generate();
    const { name,image, desc } = req.body;
    
      const product = new Product({
        key : customKey,
        image,
        name,
        description : desc,
      });
      console.log(product);
      await product.save();
      res.status(201).send("product registered successfully.");
    
  } catch (err) {
    res.send("something went wrong");
  }
};


//update product card info

exports.updateProduct = async (req,res)=>{
  try{
    let product = await Product.findById(req.params.id)
    
    if(Product.find({_id: req.params.id})){
      product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
      res.status(200).send("product info updated successfully")
    }
    else if(Product.productdetails.find({_id: req.params.id})){
      product = await Product.findByIdAndUpdate(req.params.id,{
        $set :{
          "productdetails.$productname" : req.body
        }
      })
      res.status(200).send("product info updated successfully")
    }
    
  }
   catch(err){
    res.send("something went wrong")
  }
}

// delete product 

exports.deleteProduct = async (req,res)=>{
  try{
    const product = await Product.findOneAndDelete({key : req.params.id})
    if(product){
        res.status(200).send("product deleted successfully")
    }else{
      res.status(404).send("product not found")
    }
  }catch(err){
    console.log(err)
    res.send("Something went wrong")
  }
}