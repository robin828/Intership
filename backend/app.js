const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const candidate = require('./routes/candidate-routes')
const employer = require('./routes/employer-routes')

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, auth_token');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    next()
})

app.use(bodyParser.json());

app.use("/api", candidate)
app.use("/api", employer)


mongoose.connect("mongodb+srv://robin19093:robin19093@cluster0-tfdhd.mongodb.net/internship?retryWrites=true&w=majority")
.then(app.listen(5000))
.catch(err=>console.log(err))