/* --------------------------------
* 命名空间
* 封闭空间
* 模块化  CmomonJS/AMD/CMD/UMD/ESM
* 对象化  变量和方法转换成对象的属性
--------------------------------------
这种算是延申问题
js模块化mvc（数据层、表现层、控制层）
------------------------------------*/



//命名空间
//————在window上根据挂载层级创建对应对象
let registerNamespace =function(namespacePath){
    //以window为根
    var rootObject =window;
    //对命名空间路径拆分成数组
    var namespaceParts =namespacePath.split('.');

    for (var i =0;i <namespaceParts.length;i++) {
        var currentPart =namespaceParts[i];
        //如果当前命名空间下不存在，则新建一个Object对象，等效于一个关联数组。
        if(!rootObject[currentPart])      {
           rootObject[currentPart]=new Object();
        }
        //层级深入,将current给到root
        rootObject =rootObject[currentPart];
    }
}
registerNamespace("simple.a");
window.simple.a = {
    a:"123",
    b:"456"
}
console.log(window.simple.a)



//封闭空间
(()=>{
    console.log("--abc--");
})()

//模块化


//对象化


