/*jslint indent: 2 */
var IO = require('socket.io');

var Rx = require('rx');

/* we assume there is either a server option which will be an instance of
* httpServer or a port which shall be a number
*/
var Reiki = module.exports = function(options) {
  'use strict';
  // engine.io is an eventemitter so we create a stream around the connect
  if (options.server) {
    console.log('the server', options.server)
    this.server = options.server;
    this.port = options.port || 8080;
    console.log('grrr');
    console.log(this.server);

    this.io = IO(this.server); //why is this breaking?
    
    console.log('its a server');
  }
  else if (options.port) {
    //this._createConnectionStream();
  }
  else {
    throw new Error('must include a valid port number or httpServer instance!!');
  }
};

Reiki.prototype = Object.create({});

Reiki.prototype.listen = function(portNumber) {
  'use strict';
  portNumber = portNumber || this.port;
   //this.server = engine.attach(this.server);
   //this._createConnectionStream();
  this.server.listen(portNumber);
  return this;
};

/*
Reiki.prototype._createConnectionStream = function(server) {
  'use strict';
  //creates the on connection from the server
  this.connectionStream = Rx.Node.fromEvent(this.server, 'connection', function(socket) {
    return socket;
  });
};
*/
