const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
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
    experience: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('Candidate', candidateSchema)
