const mongoose = require('mongoose');

const employerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    companyname: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('Employer', employerSchema)