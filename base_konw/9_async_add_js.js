//异步加载js方案，不少于两种
/*================================================
1.defer ----
异步加载，dom树生成后执行，只有IE能用

2.async ----
异步加载，加载完就执行，
async只能加载外部脚本，不能把js写在script标签里
ie9以上可以用，w3c标准；

3.动态创建script ----

//方法一
function jsonp({url, cb}) { 
  
  return new Promise((resolve, reject) => {

     // 声明全局变量，添加获取数据和移出方法
     window[cb] = function (data) {  
       //resolve(data)
       document.body.removeChild(script)
     }
     
     // 动态创建script
     let script = document.createElement('script')
     script.src = url;
     document.body.appendChild(script)
  })
}


=================================================*/