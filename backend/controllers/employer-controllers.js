const Employer = require('../models/employer-model')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const PostJob = require('../models/post-jobs')
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

const login = async(req, res, next)=>{
  const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array()[0].msg });
}
const { email, password } = req.body; 

let existingEmployer;
try {
    existingEmployer = await Employer.findOne({email})
} catch (error) {
  return res.status(400).send('something went wrong')
}
if(!existingEmployer){
  return res.status(400).send('Employer does not exist please sign up first')
}
const validPassword = await bcrypt.compare(password, existingEmployer.password)
if(!validPassword){
    return res.status(400).send("Invalid Password")
}
//creating token
try {
  const token = JWT.sign({_id: existingEmployer._id}, "shjvshfu")
res.header('auth-token', token).send(token)    
} catch (error) {
    console.log(error)
  return res.status(400).send('something went wrong1')
}
res.send("logged in")

}
const postJobs = async(req, res, next) => {
  console.log("xdfgchvjb")
  const { name, jobType, startDate, duration, stipend, workType, aboutWork, skillsRequired, whoCanApply, vaccancy, perks } = req.body;
  const newJob = new PostJob({
    name, jobType, startDate, duration, stipend, workType, aboutWork, skillsRequired, whoCanApply, vaccancy, perks
  })
  console.log("xdfgchvjb2")

  try {
    console.log("xdfgchvjb1")

    await newJob.save()
} catch (error) {
    const err = new Error('could not post job try again')
    return next(err)
}
res.send("Job Posted succesfully")
}

exports.signup = signup
exports.login = login
exports.postJobs = postJobs

