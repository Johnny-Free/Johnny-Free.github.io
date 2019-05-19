var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('resources'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/about', function(req,res){
    res.sendFile(path.join(__dirname + '/about.html'))
});

app.get('/home', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/projects', function(req,res){
    res.sendFile(path.join(__dirname + '/projects.html'))
});

app.listen(8080);