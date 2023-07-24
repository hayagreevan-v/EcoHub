//import model
//import Post from './model/post.model.js';
const Post = require("./models/post.model.js")
const Product = require("./models/productModel.js")
const Category= require("./models/categoryModel.js")
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app =express();

const calculateOrderAmount =(orderItems) =>{
    const initialValue=0;
    const itemsPrice= orderItems.reduce(
        (previousValue, currentValue) =>
        previousValue+currentValue.price * currentValue.amount, initialValue
    );
    return itemsPrice;
}
app.use(cors());

const productRouter = require('./routes/ProductRouter')
var corOptions ={
    origin:"https://localhost:3000"
}

app.use(express.json());

const Order = require('./models/orderModel.js');
app.post('/create-payment-intent',async(req,res) => {
    try{
        const{ orderItems, user, shippingAddress} = req.body;
        const totalPrice = calculateOrderAmount(orderItems);
        //console.log(req.body);
        /*const paymentIntent = await stripe.paymentIntents.create({
            amount : totalPrice,
            currency: 'inr'
        })
        */

        const taxPrice=0;
        const shippingPrice=0;
        //TODO: Order Details
        const newOrder = await Order.create({
            user,
            orderItems,
            shippingAddress,
            paymentMethod: 'CASH',
            taxPrice,
            shippingPrice,
            totalPrice,
            isPaid: false,

        });
        newOrder.save().then().catch(e => console.log(e));
        res.status(201).json({msg:"Order Placed...!"});
        //res.send({
        //    clientSecret: paymentIntent.client_secret
        //})
    }catch(e){
        res.status(400).json({
            error: {message: e.message}
        })
    }
})

//app.use(cors(corOptions));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb',extended: true}));
db.on('error',console.error.bind(console,"MongDB Connection error"))
db.once('open',function(){
    console.log("Database Connection established...");
})
app.get("/",(req,res)=>{
    try{
    res.json({message:"Welcome to Food Delivery System"});
    Post.find({}).then(data=>{
        res.json(data)
    }).catch(error=>{
        res.status(408).json({error})
    })
    Order.find({}).then(data=>{
        res.json(data)
    }).catch(error=>{
        res.status(408).json({error})
    })
    }
    catch(error){
        res.json({error})
    }
})

/**Post: https://localhost:3001/feedback */
app.post("/feedback",async(req,res)=>{
    //const body=req.body;
    const { name, adjective,description,price, category, imageUrl } = req.body;
    //console.log(req.body);
    try{
        //const newImage=await Post.create(body)
        //newImage.save().then().catch(e => console.log(e));
        //const newPost = await Post.create({ name, review, myfile });
        const productCategory = await Category.findOne({name:category});
        //console.log(productCategory);
        const newProduct = await Product.create({ 
            name, 
            adjective,
            desciption:description,
            price, 
            category:{name:productCategory.name,_id: productCategory._id},
            imageUrl });
        newProduct.save().then().catch(e => console.log(e));
        res.status(201).json({msg:"New Product uploaded...!"});
    }
    catch(error){
        console.log(error);
        res.status(409).json({message: error.message});
    }
})

const PORT = process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
});
/*
connect().then(() => {
    try{
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    }catch(error){
        console.log("Can't connect to the server");
    }
}).catch((error) => {
    console.log("Invalid Database Connection...!")
})
*/
app.use('/api/',productRouter);


const userRouter =require('./routes/userRouter.js');
const { initial } = require("lodash");
app.use('/api/',userRouter);