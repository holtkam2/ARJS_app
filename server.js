var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
var readyToShowTarget = false;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  readyToShowTarget = true;
  res.render('index');
});

app.get('/checkifready', function(req, res) {
  res.send(JSON.stringify(readyToShowTarget))
});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
