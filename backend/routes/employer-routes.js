const express = require('express')
const {signup, login, postJobs, postedjobs, employerProfile, totaljobs} = require('../controllers/employer-controllers')
const { check } = require('express-validator');
const verify = require('../controllers/verify');


const route = express.Router();
route.post('/employer', [
    check('name').isString().notEmpty().withMessage("Name Required"),
    check('email').isEmail().withMessage("Please Enter Valid Email").notEmpty().withMessage("Email is necessary"),
    check('password').isLength({min: 6}).withMessage('Password Must be Five Character Long'),
    check('companyname').isString().notEmpty().withMessage("Please Enter Name of Your Company")
], signup)
route.post('/employer/login', [
    check('email').isEmail().withMessage("Please Enter Valid Email orr Password").notEmpty().withMessage("Please Enter Valid Email orr Password"),
    check('password').isLength({min: 6}).withMessage('Please Enter Valid Email orr Password')
], login)
route.post('/postjobs', verify, [
    check('name').isString().notEmpty().withMessage("Name Required"),
    check('jobType').isString().notEmpty().withMessage("Please Fill Job Type"),
    check('startDate').isString().notEmpty().withMessage("Please Fill Start Date"),
    check('duration').isString().notEmpty().withMessage("Please Fill Duration"),
    check('stipend').isNumeric().notEmpty().withMessage("Please Fill Stipend"),
    check('workType').isString().notEmpty().withMessage("Please Fill Work"),
    check('skillsRequired').isArray().notEmpty().withMessage("Please Fill Skills Required"),
    check('whoCanApply').isString().notEmpty().withMessage("Please Fill Info for Apllicants"),
    check('vaccancy').isNumeric().notEmpty().withMessage("Please Fill Vaccancy"),
    check('perks').isString().notEmpty().withMessage("Please Fill Perks"),
    check('aboutWork').isString().notEmpty().withMessage("Explain Work in detail"),
],postJobs)



route.get('/postedjobs/:id', postedjobs)


route.post('/employerprofile', verify, [
    check('founder').isString().notEmpty().withMessage("Founder"),
    check('coFounder').isString().notEmpty().withMessage("CoFounder"),
    check('link').isString().notEmpty().withMessage("link"),
    check('hr').isString().notEmpty().withMessage("hr"),
    check('contactEmail').isEmail().notEmpty().withMessage("contactEmail"),
    check('contactNumber').isEmail().notEmpty().withMessage("contactNumber"),
    check('address').isEmail().notEmpty().withMessage("address"),
    check('companyName').isEmail().notEmpty().withMessage("companyName"),
], employerProfile)

route.get('/totaljob/:id', totaljobs)

module.exports = route;