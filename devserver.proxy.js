var http = require('http'),
	fs = require('fs'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
var proxy = httpProxy.createProxyServer({
	key: fs.readFileSync('ssl/key.pem', 'utf8'),
    cert: fs.readFileSync('ssl/cert.pem', 'utf8'),
	forward:'https://api.github.com'
}).listen(8181);

proxy.on('proxyReq', function (proxyReq, req, res, options) {
	console.log(proxyReq.headers, req.headers);
})
