const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    
    founder:{
        type: String,
        required: true
    }, 
    coFounder:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    hr:{
        type: String,
        required: true
    }, 
    contactEmail:{
        type: String,
        required: true
    }, 
    contactNumber:{
        type: String,
        required: true
    }, 
    address:{
        type: String,
        required: true
    }, 
    companyName:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Profile', profileSchema)