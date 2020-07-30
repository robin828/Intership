const Employer = require('../models/employer-model')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const signup = async (req, res, next) => {

    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }
    const {name, email, password, companyname} = req.body;
    let hashedPassword
  try {
    const salt = await bcrypt.genSalt(10)
    hashedPassword = await bcrypt.hash(password, salt)
  } catch (error) {
      console.log("Password is not hashed")
      return res.status(400).send('Something Went Wrong Please Try Again Later')
  }
  const employer = new Employer({
    name,email,password: hashedPassword, companyname
})

    let existingEmployer;

    try {
        existingEmployer = await Employer.findOne({email})
        
    } catch (error) {
      console.log("ertyu")
    return res.status(400).send('something went wrong')
    
    }
    if(existingEmployer){
        return res.status(400).json({error: 'Employer already exist.Go and Sign In'})
    }
    try {
        await employer.save()
    } catch (error) {
        const err = new Error('could not sign up try again')
        return next(err)
    }
    res.json({
        employer: employer._id
    })
}

exports.signup = signup
