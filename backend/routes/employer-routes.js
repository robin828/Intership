const express = require('express')
const {signup, login} = require('../controllers/employer-controllers')
const { body, check } = require('express-validator');


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
route.get('/postedjobs', )
route.get('/acceptedjobs', )
route.get('/rejectedjobs', )

module.exports = route;