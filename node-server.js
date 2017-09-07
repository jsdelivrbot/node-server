'use strict';
const http = require('http')
const { createReadStream } = require('fs');
const server = http.createServer()

server.on('request', (req, res) => {

	let stream = createReadStream('./index.html');

	stream.pipe(res);
    
    console.log('Request received for:', req.url)
})
server.listen(8080)