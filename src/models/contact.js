const mongoose = require("mongoose");


const querySchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true

    },

    phone:{
        type: String,
        required: true,
        unique: true
    },

    address:{
        type: String,
        required: true,
       
    },

    city:{
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
    message: {
        type: String,
        required: true
    }
    
})






const Contact = new mongoose.model("queries", querySchema);
module.exports = Contact;