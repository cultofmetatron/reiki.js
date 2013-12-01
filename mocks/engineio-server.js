//jslint indent:2
'use strict';
var http = require('http');
var Reiki = require('../lib/index.js');

var server = function() {
  return http.Server();
};


var reiki = new Reiki({server: server()});

//you should update this to include the stream api, for now I'll use
//the traditional calback style for the mock
/*
reiki.io.on('connection', function(socket) {
  console.log('socket.send: ' , socket.send);
  socket.on('echo', function(msg) {
    console.log('from the server ' , arguments);
    //socket.send(msg);
  });
  socket.on('message', function() {
    console.log('triggered message, see ', arguments);
  });
});
*/

module.exports = reiki;
