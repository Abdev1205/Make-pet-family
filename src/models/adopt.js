const mongoose = require("mongoose");
const connect = require("./donators")



const adoptersSchema = new mongoose.Schema({

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



const Adopter = new mongoose.model("Adopter", adoptersSchema);

module.exports = Adopter;