const { Mongoose } = require("mongoose")

const mongoose = require('mongoose');

const postJobSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    jobType:{
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    stipend: {
        type: Number,
        required: true
    },
    workType: {
        type: String,
        required: true
    },
    aboutWork: {
        type: String,
        required: true,
    },
    skillsRequired: {
        type: Array,
        required: true
    },
    whoCanApply: {
        type: String,
        required: true
    },
    vaccancy: {
        type: String,
        required: true
    },
    perks: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId, required: true, ref: 'Employer'
    }
})

module.exports = mongoose.model('PostJob', postJobSchema)