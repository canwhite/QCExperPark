/*
1.http协议

(1)请求行 	 

method request-uri http-version

(2)请求头

将前端的一些信息告诉后端
如果出现（空行），则证明下边的不再是请求头了

*Host：主机地址
*User-Agent：产生请求的浏览器类型。
*Accept：客户端可识别的内容类型列表。
*Connection：Keep-Alive TCP连接不会关闭，如果客户端再次访问这个服务器上的网页，会继续使用这一条已经建立的连接。
*Content-Type：
===application/x-www-form-urlencoded  常用post提交数据的方式，原生Form表单
===multipart/form-data  上传键值对，也可以上传文件
===application/json   默认就是提交JSON字符串
===text/xml  xml的作用不言而喻，用于传输和存储数据，非常适合万维网传输
===binary  指的是一些二进制文件类型
*Cookie：最重要的请求头之一, 将cookie的值发送给HTTP服务器。

(3)请求体

请求体主要包含前端发送给后端的数据（参数）
对于GET请求一般不需要请求体，因为GET参数直接体现在URI上
对于POST请求，需要请求体，请求体里边保存POST参数





-----------------2.https和http协议的区别------------------------


1、http协议：是超文本传输协议，信息是明文传输。如果攻击者截取了Web浏览器和网站服务器之间的传输报文，就可以直接读懂其中的信息。
2、https协议：是具有安全性的ssl加密传输协议，为浏览器和服务器之间的通信加密，确保数据传输的安全。
------------
ssl采用它采用了RC4、MD5以及RSA等加密算法
------------

*/