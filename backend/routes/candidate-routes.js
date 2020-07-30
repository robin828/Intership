const express = require('express')
const {signup} = require('../controllers/candidate-controllers')
const { check } = require('express-validator');


const route = express.Router();
route.post('/candidate', [
    check('name').isString().notEmpty().withMessage("Name Required"),
    check('email').isEmail().withMessage("Please Enter Valid Email").notEmpty().withMessage("Email is necessary"),
    check('password').isLength({min: 6}).withMessage('Password Must be Five Character Long'),
    check('experience').isString().notEmpty().withMessage("Please Enter Work Experience")
], signup)
route.post('/login', )
route.get('/postedjobs', )
route.get('/acceptedjobs', )
route.get('/rejectedjobs', )

module.exports = route;