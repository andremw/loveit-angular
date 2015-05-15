var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    fs = require('fs'),
    server = require('http').Server(app);

app.use(express.static(__dirname + '/client'));

server.listen(3000, function () {
    console.log('Loveit-Angular up and running!');
});
