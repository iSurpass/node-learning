var server = require('./server')
var router = require('./route')
var handler = require('./handler')

var handle = {}
handle['/'] = handler.home;
handle['/home'] = handler.home;
handle['/skr'] = handler.skr;

server.startServer(router.route,handle);

