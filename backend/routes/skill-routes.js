const express = require('express')
const { skills } = require('../controllers/skills')


const route = express.Router();
route.get('/skills', skills)


module.exports = route;