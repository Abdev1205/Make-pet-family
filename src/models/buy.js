const mongoose = require("mongoose");
const connect = require("./donators")



const buySchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        

    },

    phone:{
        type: String,
        required: true,
        
    },

    delivery:{
        type: String,
        required: true,
       
    },

    city:{
        type: String,
        required: true,
        
    },

    state:{
        type: String,
        required: true,
        
    },
    country:{
        type: String,
        required: true,
        
    },
    
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    adopted: {
        type: String,
        required: true
    }
   
})



const Buyer = new mongoose.model("Adopter", buySchema);

module.exports = Buyer;