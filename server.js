const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var path = require('path');

require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const lin = process.env.eUser;
const uid = process.env.eLogin;

app.use(express.static('resources'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/about', function(req,res){
    res.sendFile(path.join(__dirname + '/about.html'))
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/projects', function(req,res){
    res.sendFile(path.join(__dirname + '/projects.html'))
});

app.get('/contact', function(req,res){
    res.sendFile(path.join(__dirname + '/contact.html'))
});

app.post('/contact', (req,res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:`${lin}`,
            pass:`${uid}`
        }
    });

    const mailOptions = {
        from: `${lin}`,
        to: `${lin}`,
        // cc: `$req.body.rEmail`,
        subject: `${req.body.rEmail}`,
        html:
        `Requestor: ${req.body.rName}
        <br/>
        Request: ${req.body.eBody}`
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else {
            console.log('email log', info)
        }
    });
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});