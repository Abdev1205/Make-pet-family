const mongoose = require("mongoose");



const donatorsSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        

    },

    phone:{
        type: String,
        required: true,
        
    },

    address:{
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
    pet: {
        type: String,
        required: true
    }
   
})



const Donators = new mongoose.model("Donators", donatorsSchema);

module.exports = Donators;