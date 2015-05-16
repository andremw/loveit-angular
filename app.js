var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    fs = require('fs'),
    server = require('http').Server(app);

app.use(express.static(__dirname + '/client'));
app.use('/components', express.static(__dirname + '/bower_components'));

server.listen(3000, function () {
    console.log('Loveit-Angular up and running!');
});
