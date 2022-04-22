/*---------------------------------------
*ajax是什么？
*ajax的交互模型？
*同步和异步的区别？
*如何解决跨域问题？

(1)ajax是什么？
Async JavaScript and XML
通过在后台与服务器进行少量数据交换，
使网页实现异步更新


(2)ajax的交互模型

XMLHttpRequest(XHR请求)

// A--同步执行-- 
const xhr = new XMLHttpRequest()
// 第三个参数给false，是同步的
xhr.open('GET', 'https://app.dev.9kbs.com/api/content/adslist', false)
xhr.send()
console.log(xhr.responseText)
console.log('请求完成')

 
// B--异步执行 --
const xhr = new XMLHttpRequest()
// 第三个参数是true，异步的
xhr.open('GET', 'https://app.dev.9kbs.com/api/content/adslist', true)
 
// 异步回调
xhr.onreadystatechange = () => {
    
     //readyState 1-4
     //0 (未初始化)： (XMLHttpRequest)对象已经创建，但还没有调用open()方法。
     //1 (载入)：已经调用open() 方法，但尚未发送请求。
     //2 (载入完成)： 请求已经发送完成。
     //3 (交互)：可以接收到部分响应数据。
     //4 (完成)：已经接收到了全部数据，并且连接已经关闭。

     if (xhr.readyState === 4) {
        console.log(xhr.responseText)
    }
}
xhr.send()
console.log('请求完成')

//总结
1.创建XHR实例
2.调用open方法,参数:1.方法 2.url 3.false:同步  
3.异步回调 onreadystatechange 
    返回的状态在xhr.readyState 值也是按状态的
        0.未初始化 
        1.载入 
        2.载入完成 
        3.交互(拿到了响应数据) 
        4.完成交成(连接关闭)
    获取返回值 xhr.responseText

4.send()

(3)同步和异步的区别

同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，
那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去；

异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。
当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。

(4)如何解决跨域的问题

base:同源策略
协议+域名+端口 三者相同
它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击

解决跨域常用的几种方法：
1.jsonp -加载成动态标签 
    缺点：只支持get、只支持http、没有失败的状态码、安全性问题 
    优点：不受同源限制、兼容性好、可以拿回调结果，区分了Controller和View层

2.nodejs 中间件代理跨域
3.Access-Control-Allow-Origin
4.nginx反代 
5.postMessage

---------------------------------------*/