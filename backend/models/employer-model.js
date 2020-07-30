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
    Cname: {
        type: String,
        required: true,
    }
})


mongoose.model('Employer', employerSchema)