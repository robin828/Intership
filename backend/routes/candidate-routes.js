const express = require('express')
const {signup, login} = require('../controllers/candidate-controllers')
const { check } = require('express-validator');


const route = express.Router();
route.post('/candidate', [
    check('name').isString().notEmpty().withMessage("Name Required"),
    check('email').isEmail().withMessage("Please Enter Valid Email").notEmpty().withMessage("Email is necessary"),
    check('password').isLength({min: 6}).withMessage('Please Enter Valid Email'),
    check('experience').isString().notEmpty().withMessage("Please Enter Work Experience")
], signup)
route.post('/candidate/login', [
    check('email').isEmail().withMessage("Please Enter Valid Email orr Password").notEmpty().withMessage("Please Enter Valid Email orr Password"),
    check('password').isLength({min: 6}).withMessage('Please Enter Valid Email orr Password')
], login)
route.get('/postedjobs', )
route.get('/acceptedjobs', )
route.get('/rejectedjobs', )

module.exports = route;