/*
* @Author: Administrator
* @Date:   2016-05-30 10:08:23
* @Last Modified by:   Administrator
* @Last Modified time: 2016-05-30 10:12:09
*/

'use strict';

var http = require('http');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hello Node!');
}).listen(8888);

console.log("Server running at http://127.0.0.1:8888/")

