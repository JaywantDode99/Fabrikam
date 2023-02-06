var express = require('express');
var path=require('path');
var app = express();

//server configuration
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/index.html'));
 });


app.get('/information', function (req, res) {
    var person={firstName:'Jaywant',lastName:'Dode',age:23};
    res.send(person);
});

var server = app.listen(1004, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:1004", host, port)
});

  