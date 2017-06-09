//importing dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    db = require('./models');
    controllers = require('./controllers');

    bodyParser = require('body-parser'),
    User = require('./models/user'),//for the user schema when we build one
    Message = require('./models/message');//for the message schema when we build one
    Walk = require('./models/walk');//for the walk schema when we build one


var app = express()

//to config API to use body body-parser and look for JSON in req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/api', controllers.api.index);
app.get('/api/users', controllers.users.index);
app.get('/api/walks/', controllers.walks.index);
app.get('/api/messages/', controllers.messages.index);
app.get('/api/walks/', controllers.walks.showAllWalks);
app.get('/api/walks/walkId', controllers.walks.showOneWalk);
app.get('/api/users/:userId/messages', controllers.messages.showAllMessages);
app.get('/api/users/:userId/messages/:messageId', controllers.messages.showOneMessage);
app.post('/api/users/:userId/messages', controllers.messages.create);
app.delete('/api/users/:userId/messages/:messageId', controllers.messages.destroy);
app.put('/api/users/:userId/messages/:messageId', controllers.messages.update);
app.post('/api/users/:userId/walks', controllers.walks.create);
app.delete('/api/users/:userId/walks/:walkId', controllers.walks.destroy);
app.put('/api/users/:userId/walks/:walkId', controllers.walks.update);


//use router config when we call /API
//start server
var port = 3000;
app.listen(port, function() {
    console.log(`api running on ${port}`);
});
