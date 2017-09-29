var express = require('express');
var app = express();
var request = require('request');
var fs = require('fs');

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/buster_drone/scene.gtlf', function(req, res) {
  console.log('got a request for the drone file')
  res.sendFile(__dirname + '/buster_drone/scene.gtlf');
});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});