
// npm install --save connect forever serve-static

var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect().use(serveStatic('src'));

require('http').createServer(app).listen(process.env.PORT);
