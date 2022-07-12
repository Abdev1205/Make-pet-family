const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const project1Schema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true

    },

    password: {
        type: String,
        required: true
    },

    confirm: {
        type: String,
        required: true
    },
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    tokens:[{
        tokens:{
            type: String,
            required: true
        }
    }]
})

project1Schema.methods.generateAuthToken = async function(){
    
    try {
        console.log(this._id);
        const token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        
        return token;
    } catch (error) {
        res.send("the error part "+error);
        console.log("the error part "+error);

    }
}


project1Schema.pre("save", async function (next) {

    if (this.isModified("password")) {
        
        this.password = await bcrypt.hash(this.password, 10);
        

        this.confirm = await bcrypt.hash(this.password, 10);

    }
    next();
})

const Auth = new mongoose.model("Auth", project1Schema);
module.exports = Auth;