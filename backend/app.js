const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const candidate = require('./controllers/candidate-controllers')
const employer = require('./controllers/employer-controllers')

app.use(bodyParser.json());

app.use("/api", candidate)
app.use("/api", employer)


mongoose.connect('mongodb+srv://robin19093:robin19093@cluster0-tfdhd.mongodb.net/internship?retryWrites=true&w=majority')
.then(app.listen(5000))
.catch(err=>console.log(err))