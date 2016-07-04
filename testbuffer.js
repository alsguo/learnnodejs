
// var buffer = new Buffer(1024);
// len = buffer.write("hello nodejs");

// console.log("写入字节数为：",len);


var buffer = new Buffer("hello nodejs");
len = buffer.length;
str = buffer.toString();
json = buffer.toJSON();
hello = buffer.slice(0,5);

console.log("缓冲区长度为：%s\n缓冲区内容为：%s\n缓冲区转换为json：%s\n截取缓冲区：%s",
	len,str,json,hello)
