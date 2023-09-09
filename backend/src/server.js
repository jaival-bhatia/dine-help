const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config() 
require('../db/connection');

const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');

const userRouter = require('../router/user-route');
const productRouter = require('../router/product-route');
const orderRouter = require('../router/order-route');



const app = express()

app.use(cors())



app.use(express.json())
app.use(cookieParser());
app.use(userRouter)
app.use(productRouter)
app.use(orderRouter)


app.listen(4000, () => {  
    // console.log(process.env.PORT)  
    console.log('Server is running on port 3000')
})