'use strict';
const http = require('http')
const { readFile } = require('fs');
const server = http.createServer()

server.on('request', (req, res) => {

	readFile('./index.html', (err, data) => {
		if (err) throw err;
	    res.end(data);
		
	});

    console.log('Request received for:', req.url)
})
server.listen(8080)