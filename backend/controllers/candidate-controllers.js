const Candidate = require('../models/candidate-model')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const signup = async (req, res, next) => {

    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }
    const {name, email, password, experience} = req.body;
    let hashedPassword
  try {
    const salt = await bcrypt.genSalt(10)
    hashedPassword = await bcrypt.hash(password, salt)
  } catch (error) {
      console.log("Password is not hashed")
      return res.status(400).send('Something Went Wrong Please Try Again Later')
  }
  const candidate = new Candidate({
    name,email,password: hashedPassword, experience
})

    let existingCandidate;

    try {
        existingCandidate = await Candidate.findOne({email})
        
    } catch (error) {
    return res.status(400).send('something went wrong')
    }
    if(existingCandidate){
        return res.status(400).json({error: 'Candidate already exist.Go and Sign In'})
    }
    try {
        await candidate.save()
    } catch (error) {
        const err = new Error('could not sign up try again')
        return next(err)
    }
    res.json({
        candidate: candidate._id
    })
}

const login = async(req, res, next)=>{
  const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array()[0].msg });
}
const { email, password } = req.body; 

let existingCandidate;
try {
    existingCandidate = await Candidate.findOne({email})
} catch (error) {
  return res.status(400).send('something went wrong')
}
if(!existingCandidate){
  return res.status(400).send('Candidate does not exist please sign up first')
}
const validPassword = await bcrypt.compare(password, existingCandidate.password)
if(!validPassword){
    return res.status(400).send("Invalid Password")
}
//creating token
try {
  const token = JWT.sign({_id: existingCandidate._id}, "shjvshfu")
res.header('auth-token', token).send(token)    
} catch (error) {
    console.log(error)
  return res.status(400).send('something went wrong1')
}
res.send("logged in")

}
const alljobs = async (req, res, next) => {
  
}

exports.signup = signup
exports.login = login
