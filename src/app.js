require('dotenv').config()
const express = require("express");
const app = express();
const https = require("https");
const qs = require("querystring");
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
require("./db/conn");
const Auth = require("./models/auth");
const Donators = require("./models/donators");
const Adopter = require("./models/adopt");
const Contact = require("./models/contact");
const Razorpay = require("razorpay");

var bodyParser= require("body-parser")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

var instance = new Razorpay({  key_id: 'rzp_test_WNiMDIjXzuWezY',  key_secret: 'rzp_test_WNiMDIjXzuWezY',});

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));
app.use(cookieParser());
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partial_path);

app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/footer",(req,res)=>{
    res.render("footer");
});

app.get("/dog",(req,res)=>{
    res.render("dog");
});

app.get("/payment",(req,res)=>{
    res.render("payment");
});

app.get("/index",(req,res)=>{
    res.render("index");
});

app.get("/adopt",(req,res)=>{
    res.render("adopt");
});

app.get("/donate", (req,res)=>{
    res.render("donate");
});

app.get("/donate-login", (req,res)=>{
    res.render("donate-login");
});

app.get("/donate-main", (req,res)=>{
    res.render("donate-main");
});

app.get("/authenticate-donate", (req,res)=>{
    res.render("authenticate-donate");
});

app.get("/authenticate-adopt-dog", (req,res)=>{
    res.render("authenticate-adopt-dog");
});

app.get("/authenticate-buy-dog", (req,res)=>{
    res.render("authenticate-buy-dog");
});

app.get("/authenticate-adopt-cat", (req,res)=>{
    res.render("authenticate-adopt-cat");
});

app.get("/authenticate-buy-cat", (req,res)=>{
    res.render("authenticate-buy-cat");
});

app.get("/authenticate-adopt-bird", (req,res)=>{
    res.render("authenticate-adopt-bird");
});

app.get("/authenticate-buy-bird", (req,res)=>{
    res.render("authenticate-buy-bird");
});

app.get("/authenticate-adopt-rabbit", (req,res)=>{
    res.render("authenticate-adopt-rabbit");
});

app.get("/authenticate-buy-rabbit", (req,res)=>{
    res.render("authenticate-buy-rabbit");
});

app.get("/authenticate-adopt-cattle", (req,res)=>{
    res.render("authenticate-adopt-cattle");
});

app.get("/authenticate-buy-cattle", (req,res)=>{
    res.render("authenticate-buy-cattle");
});



app.get("/authenticate-adopt-fish", (req,res)=>{
    res.render("authenticate-adopt-fish");
});

app.get("/authenticate-buy-fish", (req,res)=>{
    res.render("authenticate-buy-fish");
});



app.get("/cat",(req,res)=>{
    res.render("cat");
});

app.get("/adopt-dog-1",(req,res)=>{
    res.render("adopt-dog-1");
});

app.get("/adopt-main",(req,res)=>{
    res.render("adopt-main");
});


app.get("/adopt-login-dog",(req,res)=>{
    res.render("adopt-login-dog");
});

app.get("/buy-login-dog",(req,res)=>{
    res.render("buy-login-dog");
});

app.get("/adopt-login-cat",(req,res)=>{
    res.render("adopt-login-cat");
});

app.get("/buy-login-cat",(req,res)=>{
    res.render("buy-login-cat");
});

app.get("/adopt-login-bird",(req,res)=>{
    res.render("adopt-login-bird");
});

app.get("/buy-login-bird",(req,res)=>{
    res.render("buy-login-bird");
});

app.get("/adopt-login-rabbit",(req,res)=>{
    res.render("adopt-login-rabbit");
});

app.get("/buy-login-rabbit",(req,res)=>{
    res.render("buy-login-rabbit");
});

app.get("/adopt-login-cattle",(req,res)=>{
    res.render("adopt-login-cattle");
});

app.get("/buy-login-cattle",(req,res)=>{
    res.render("buy-login-cattle");
});

app.get("/adopt-login-fish",(req,res)=>{
    res.render("adopt-login-fish");
});

app.get("/buy-login-fish",(req,res)=>{
    res.render("buy-login-fish");
});



app.get("/right",(req,res)=>{
    res.render("right");
});

app.get("/pet-not-available",(req,res)=>{
    res.render("pet-not-available");
});

app.get("/pet-available",(req,res)=>{
    res.render("pet-available");
});

app.get("/bird",(req,res)=>{
    res.render("bird");
});

app.get("/buy",(req,res)=>{
    res.render("buy");
});

app.get("/rabbit",(req,res)=>{
    res.render("rabbit");
});

app.get("/adopt-check",(req,res)=>{
    res.render("adopt-check");
});
app.get("/login-to-continue",(req,res)=>{
    res.render("login-to-continue");
});

app.get("/dog-login-to-continue",(req,res)=>{
    res.render("dog-login-to-continue");
});

app.get("/buy-dog-login-to-continue",(req,res)=>{
    res.render("buy-dog-login-to-continue");
});

app.get("/cat-login-to-continue",(req,res)=>{
    res.render("cat-login-to-continue");
});

app.get("/buy-cat-login-to-continue",(req,res)=>{
    res.render("buy-cat-login-to-continue");
});

app.get("/bird-login-to-continue",(req,res)=>{
    res.render("bird-login-to-continue");
});

app.get("/buy-bird-login-to-continue",(req,res)=>{
    res.render("buy-bird-login-to-continue");
});

app.get("/rabbit-login-to-continue",(req,res)=>{
    res.render("rabbit-login-to-continue");
});

app.get("/buy-rabbit-login-to-continue",(req,res)=>{
    res.render("buy-rabbit-login-to-continue");
});

app.get("/cattle-login-to-continue",(req,res)=>{
    res.render("cattle-login-to-continue");
});

app.get("/buy-cattle-login-to-continue",(req,res)=>{
    res.render("buy-cattle-login-to-continue");
});

app.get("/fish-login-to-continue",(req,res)=>{
    res.render("fish-login-to-continue");
});

app.get("/buy-fish-login-to-continue",(req,res)=>{
    res.render("buy-fish-login-to-continue");
});

app.get("/something-went-wrong",(req,res)=>{
    res.render("something-went-wrong");
});

app.get("/invalid-login",(req,res)=>{
    res.render("invalid-login");
});

app.get("/donate-login-sucessfull",(req,res)=>{
    res.render("donate-login-sucessfull");
});

app.get("/dog-login-sucessfull",(req,res)=>{
    res.render("dog-login-sucessfull");
});

app.get("/cat-login-sucessfull",(req,res)=>{
    res.render("cat-login-sucessfull");
});

app.get("/sell",(req,res)=>{
    res.render("sell");
});

app.get("/bird-login-sucessfull",(req,res)=>{
    res.render("bird-login-sucessfull");
});

app.get("/rabbit-login-sucessfull",(req,res)=>{
    res.render("rabbit-login-sucessfull");
});

app.get("/cattle-login-sucessfull",(req,res)=>{
    res.render("cattle-login-sucessfull");
});

app.get("/fish-login-sucessfull",(req,res)=>{
    res.render("fish-login-sucessfull");
});

app.get("/cattle",(req,res)=>{
    res.render("cattle");
});


app.get("/fish-buy",(req,res)=>{
    res.render("fish-buy");
});

app.get("/cattle-buy",(req,res)=>{
    res.render("cattle-buy");
});

app.get("/portfolio",(req,res)=>{
    res.render("portfolio");
});

app.get("/rabbit-buy",(req,res)=>{
    res.render("rabbit-buy");
});

app.get("/bird-buy",(req,res)=>{
    res.render("bird-buy");
});

app.get("/cat-buy",(req,res)=>{
    res.render("cat-buy");
});

app.get("/under",(req,res)=>{
    res.render("under");
});

app.get("/dog-buy",(req,res)=>{
    res.render("dog-buy");
});

app.get("/fish",(req,res)=>{
    res.render("fish");
});

app.get("/authenticate",(req,res)=>{
    console.log(`this is cookie ${req.cookies.jwt}`);
    res.render("authenticate");
});


app.use(express.json());
app.use(express.urlencoded({extended:false}));

//razorpay

app.post("/create/orderId", (req,res)=>{
    console.log("create OrderId request",req.body);

    var options = {
        amount: req.body.amount,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "rcp1"
      };
      instance.orders.create(options, function(err, order) {
        console.log(order);
        res.send({orderId:order.id});
      });
})

app.post("/api/payment/verify",(req,res)=>{

    let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
   
     var crypto = require("crypto");
     var expectedSignature = crypto.createHmac('sha256', '<rzp_test_WNiMDIjXzuWezY>')
                                     .update(body.toString())
                                     .digest('hex');
                                     console.log("sig received " ,req.body.response.razorpay_signature);
                                     console.log("sig generated " ,expectedSignature);
     var response = {"signatureIsValid":"false"}
     if(expectedSignature === req.body.response.razorpay_signature)
      response={"signatureIsValid":"true"}
         res.send(response);
     });
   
  





///////////////////////////////////////
app.post("/authenticate",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("login-to-continue");
            
        } else {
            req.send("Password are not matching")
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});

//contact
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/contact",async (req,res)=>{
    try {
        
        
        
        
            const contact = new Contact({
                email:req.body.email,
                phone:req.body.phone,
                address:req.body.address,
                city:req.body.city,
                state:req.body.state,
                country:req.body.country,
                first:req.body.first,
                last:req.body.last,
                message:req.body.message,
                
                

            })
            
            
           

            const messages = await contact.save();
            
            
            
            res.status(201).render("response-saved");
            
        
    } catch (error) {
        res.render("something-went-wrong");
    }
});

//donators reg
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/donators",async (req,res)=>{
    try {
        
        
        
        
            const donate = new Donators({
                email:req.body.email,
                phone:req.body.phone,
                address:req.body.address,
                city:req.body.city,
                state:req.body.state,
                country:req.body.country,
                first:req.body.first,
                last:req.body.last,
                pet:req.body.pet,
                
                

            })
            
            
           

            const donated = await donate.save();
            
            
            
            res.status(201).render("response-saved");
            
        
    } catch (error) {
        res.render("something-went-wrong");
    }
});

//adopt main
app.post("/adoptors",async (req,res)=>{
    try {
        
        
        
        
            const adopt = new Adopter({
                email:req.body.email,
                phone:req.body.phone,
                delivery:req.body.delivery,
                city:req.body.city,
                state:req.body.state,
                country:req.body.country,
                first:req.body.first,
                last:req.body.last,
                adopted:req.body.adopted,
                
                

            })
            
            
           

            const adopted = await adopt.save();
            
            
            
            res.status(201).render("response-saved");
            
        
    } catch (error) {
        res.send(error);
    }
});

//adopt registration 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/authenticate-adopt-dog",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("dog-right");
            
        } else {
            req.send("Password are not matching").render("something-went-wrong");;
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});

app.post("/authenticate-buy-dog",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("buy-dog-right");
            
        } else {
            req.send("Password are not matching").render("something-went-wrong");;
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/authenticate-adopt-cat",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("cat-right");
            
        } else {
            req.send("Password are not matching").render("something-went-wrong");;
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/authenticate-buy-cat",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("buy-cat-right");
            
        } else {
            req.send("Password are not matching").render("something-went-wrong");;
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/authenticate-adopt-bird",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("bird-right");
            
        } else {
            req.send("Password are not matching").render("something-went-wrong");;
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/authenticate-buy-bird",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("buy-bird-right");
            
        } else {
            req.send("Password are not matching").render("something-went-wrong");;
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/authenticate-adopt-rabbit",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("rabbit-right");
            
        } else {
            req.send("Password are not matching").render("something-went-wrong");;
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/authenticate-buy-rabbit",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("buy-rabbit-right");
            
        } else {
            req.send("Password are not matching").render("something-went-wrong");;
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/authenticate-adopt-cattle",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("cattle-right");
            
        } else {
            req.send("Password are not matching").render("something-went-wrong");;
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/authenticate-buy-cattle",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("buy-cattle-right");
            
        } else {
            req.send("Password are not matching").render("something-went-wrong");;
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/authenticate-adopt-fish",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("fish-right");
            
        } else {
            req.send("Password are not matching").render("something-went-wrong");;
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/authenticate-buy-fish",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("buy-fish-right");
            
        } else {
            req.send("Password are not matching").render("something-went-wrong");;
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});



//donate registration system
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/authenticate-donate",async (req,res)=>{
    try {
        
        
        const password = req.body.password;
        const confirm = req.body.confirm;

        if (password === confirm) {
            const register = new Auth({
                email:req.body.email,
                first:req.body.first,
                last:req.body.last,
                password:req.body.password,
                confirm:req.body.confirm
                
                

            })
            
            const token = await register.generateAuthToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+60000000),
                httpOnly:true
            })
            console.log(`this is cookie ${req.cookies.jwt}`);
           

            const registered = await register.save();
            
            
            res.status(201).render("right");
            
        } else {
            req.send("Password are not matching").render("something-went-wrong");;
            
        }
    } catch (error) {
        res.render("something-went-wrong");
    }
});

//adopt checking pet
app.post("/adopt-check",async (req,res)=>{
    try {
        
        const pet = req.body.pet;
        const check = await Donators.findOne({pet:pet});
        
        if (check) {
            res.status(201).render("pet-available");
            
        } else {
            res.render("pet-not-available");
        }
        

        
    } catch (error) {
        res.status(400).render("something-went-wrong")
        
        
    }
});


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/authlogin",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("donate-login-sucessfull");
            
        } else {
            res.render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
        
    }
});

//dog login 
app.post("/dog-login-to-continue",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("dog-login-sucessfull");
            
        } else {
            res.render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/buy-dog-login-to-continue",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("buy-dog-login-sucessfull");
            
        } else {
            res.render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});


//cat login 
app.post("/cat-login-to-continue",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("cat-login-sucessfull");
            
        } else {
            res.render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/buy-cat-login-to-continue",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("buy-cat-login-sucessfull");
            
        } else {
            res.render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

//bird login 
app.post("/bird-login-to-continue",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("bird-login-sucessfull");
            
        } else {
            res.render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/buy-bird-login-to-continue",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("buy-bird-login-sucessfull");
            
        } else {
            res.render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

//rabbit login 
app.post("/rabbit-login-to-continue",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("rabbit-login-sucessfull");
            
        } else {
            res.render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/buy-rabbit-login-to-continue",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("buy-rabbit-login-sucessfull");
            
        } else {
            res.render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

//cattle login 
app.post("/cattle-login-to-continue",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("cattle-login-sucessfull");
            
        } else {
            res.render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/buy-cattle-login-to-continue",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("buy-cattle-login-sucessfull");
            
        } else {
            res.render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/fish-login-to-continue",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("fish-login-sucessfull");
            
        } else {
            res.render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/buy-fish-login-to-continue",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("buy-fish-login-sucessfull");
            
        } else {
            res.render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});


//adopt login 

app.post("/adopt-login-dog",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("dog-login-sucessfull");
            
        } else {
            res.send("Email Or Password are not matching ").render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/buy-login-dog",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("buy-dog-login-sucessfull");
            
        } else {
            res.send("Email Or Password are not matching ").render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/adopt-login-cat",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("cat-login-sucessfull");
            
        } else {
            res.send("Email Or Password are not matching ").render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/buy-login-cat",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("buy-login-sucessfull");
            
        } else {
            res.send("Email Or Password are not matching ").render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/adopt-login-bird",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("bird-login-sucessfull");
            
        } else {
            res.send("Email Or Password are not matching ").render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/buy-login-bird",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("buy-bird-login-sucessfull");
            
        } else {
            res.send("Email Or Password are not matching ").render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});



app.post("/adopt-login-rabbit",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("rabbit-login-sucessfull");
            
        } else {
            res.send("Email Or Password are not matching ").render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});


app.post("/buy-login-rabbit",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("buy-rabbit-login-sucessfull");
            
        } else {
            res.send("Email Or Password are not matching ").render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});




app.post("/adopt-login-cattle",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("cattle-login-sucessfull");
            
        } else {
            res.send("Email Or Password are not matching ").render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/buy-login-cattle",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("buy-cattle-login-sucessfull");
            
        } else {
            res.send("Email Or Password are not matching ").render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/adopt-login-fish",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("fish-login-sucessfull");
            
        } else {
            res.send("Email Or Password are not matching ").render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});

app.post("/buy-login-fish",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("buy-fish-login-sucessfull");
            
        } else {
            res.send("Email Or Password are not matching ").render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});



//donate login 
app.post("/donate-login",async (req,res)=>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Auth.findOne({email:email});
        const isMatch = bcrypt.compare(password ,useremail.password );
        if (isMatch) {
            res.status(201).render("donate-login-sucessfull");
            
        } else {
            res.send("Email Or Password are not matching ").render("invalid-login");
        }
        

        
    } catch (error) {
        res.status(400).render("invalid-login");
    }
});



app.listen(port, ()=>{
    console.log(`Our Server is running at port no ${port}`);
});