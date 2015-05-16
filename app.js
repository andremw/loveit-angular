var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    fs = require('fs'),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    uploadedPics = [];

app.use(express.static(__dirname + '/client'));
app.use('/components', express.static(__dirname + '/bower_components'));
app.use('/socket-io', express.static(__dirname + '/node_modules/socket.io/node_modules/socket.io-client'))

server.listen(3000, function () {
    console.log('Loveit-Angular up and running!');
});

io.on('connection', function (socket) {

    socket.emit('all:images', uploadedPics);

    socket.on('new:images', function (newImages) {
        uploadedPics = uploadedPics.concat(newImages);

        socket.broadcast.emit('new:images', newImages);
    });

});
