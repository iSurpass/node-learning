var server = require('./server')
var router = require('./route')
var handler = require('./handler')

var handle = {}
handle['/'] = handler.home;
handle['/home'] = handler.home;
handle['/skr'] = handler.skr;
handle['/api/v1/records'] = handle.api_records

//server.startServer(router.route,handle);
server.handleServer(router.route,handle);
