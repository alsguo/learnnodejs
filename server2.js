/*
* @Author: Administrator
* @Date:   2016-06-30 15:54:28
* @Last Modified by:   Administrator
* @Last Modified time: 2016-06-30 15:54:30
*/

'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://%s:%s/',hostname,port);
});