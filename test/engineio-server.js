var configs = require('./config.json');
var should = require('should');
var Reiki = require('../lib/index.js');
var request = require('request');
describe('engineioServer', function() {
  'use strict';
  describe('websocket server', function() {
    var reiki;
    var connectionUrl;
    beforeEach(function() {
      connectionUrl = configs.host + ':' + configs.port;
      reiki = require('../mocks/engineio-server.js');
      
    });

    afterEach(function() {
      //reiki.server.close();

    });

/*
    it('should return hello world for a standard http request', function(done) {
      reiki.listen(configs.port);
      request('http://' + connectionUrl, function(err, response, body) {
        should.exist(body);
        body.should.equal('hello world');
        done();
      });
    });
*/
    it('should return "hello world" in response to me sending it "hello world" ', function(done) {
      reiki.listen(configs.port);
      var client = require('socket.io-client')('http://' + connectionUrl);
      /*
      client.on('connect', function() {
        client.on('message', function(data) {
          console.log('from client ' , data);

        });
        //client.emit('message', 'foo');
      });
      */
    });
  });
});

