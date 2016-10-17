
var express = require('express');
var app = express();
var portApp = 8080;
  //conf.port;

app.get('/', function (req, res) {
  res.sendFile('app/index.html' , { root : __dirname});
});

app.get('/ping', function (req, res) {
  res.send('pong')
})

var server = app.listen(portApp, function () {
    var port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
});
app.use(express.static(__dirname));
