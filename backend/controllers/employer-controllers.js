const Employer = require('../models/employer-model')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const PostJob = require('../models/post-jobs')
const Profile = require('../models/employer-profile')
const JWT = require('jsonwebtoken')
const mongoose = require('mongoose');


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
  res.header(
    'auth_token', token
     ).json({
      auth_token: token,
      userId: existingEmployer._id
     })
  next(); 
} catch (error) {
    console.log(error)
  return res.status(400).send('something went fgh')
}
}
const postJobs = async(req, res, next) => {
  const { name, jobType, startDate, duration, stipend, workType, aboutWork, skillsRequired, whoCanApply, vaccancy, perks, userId } = req.body;
  const newJob = new PostJob({
    name, jobType, startDate, duration, stipend, workType, aboutWork, skillsRequired, whoCanApply, vaccancy, perks, userId
  })

  let employer;
  try {
    employer = await Employer.findById(userId)
  } catch (error) {
    console.log(error)
    return res.status(500).send('something went gfg')
  }

  if(!employer){
    return res.status(404).send('Employer Not Found')
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await newJob.save({ session: sess });
    employer.jobs.push(newJob);
    await employer.save({ session: sess })
    await sess.commitTransaction();
} catch (error) {
    const err = new Error('could not post job try again')
    return next(err)
}
res.send("Job Posted succesfully")
}

const postedjobs = async (req, res, next) => {

  const employerId = req.params.id;

  let jobWithEmployer;
  try {
    jobWithEmployer = await Employer.findById(employerId).populate('jobs')
  } catch (error) {
    const err = new Error('could not post job try again')
    return next(err)
  }
  if( !jobWithEmployer || jobWithEmployer.jobs.length === 0 ) {
    const err = new Error('Could not find employer')
    return next(err)
  }
  res.json({
    jobs: jobWithEmployer.jobs.map(employer => employer.toObject({ getters: true }))
  });
};

const employerProfile = async (req, res, next) => {
  const { founder, coFounder, link, hr, contactEmail, contactNumber, address, companyName } = req.body;
  const newProfile = new Profile({
    founder, coFounder, link, hr, contactEmail, contactNumber, address, companyName
  })

  let existingEmail;
  try {
    existingEmail = await Profile.find({contactEmail});
  } catch (error) {
    const err = new Error('Could not existingEmail')
    return next(err)
  }
  if(existingEmail.length!==0) {
    return res.send('email already exist')
  }

    try {
      await newProfile.save();
    } catch (error) {
      const err = new Error('Could not newProfile')
    return next(error)
    }
  
  res.send('done')
}

const totaljobs = async (req, res, next) => {
  console.log("sgsadgs")
  const employerId = req.params.id;
  let jobWithEmployer;
  try {
    jobWithEmployer = await Employer.findById(employerId).populate('jobs')
  } catch (error) {
    const err = new Error('Something Went Wrong Please Try Again')
    return next(err)
  }
  let profileChecker;
  try {
    profileChecker = await Profile.find(contactEmail)
  } catch (error) {
    console.log("Profile Checker error");
    console.log(error);
  }

  console.log(profileChecker);
  console.log(jobWithEmployer.jobs.length)
  res.json({
    totalJobs: jobWithEmployer.jobs.length
  })

}

exports.signup = signup
exports.login = login
exports.postJobs = postJobs
exports.postedjobs = postedjobs
exports.employerProfile = employerProfile
exports.totaljobs = totaljobs

