//函数柯里化实际上是对闭包的一种运用
//---------------------------------------
//只传递给函数一部分参数来调用它
//让它返回一个函数来处理剩下的参数
//---------------------------------------

var add = function(x){

    return function(y){
        return x+y;
    }

}

var increment = add(1);//返回一个函数，这个函数已经持有x
var data = increment(2);//再在返回的函数里放入y
console.log(data);


//如果输入三个参数，那就包装三层
//假设一种场景，完成一个请求需要三个值
function sum(a){
    return function(b){
        //最终要调用的函数
        return function(c){
            return new Promise((resolve,reject)=>{
                //可以使用a、b、c发起请求
                //这里简单返回吧
                resolve(a+b+c);
            });
        }
    }
}

var f2 =  sum(1)//返回第二层函数 
var f3 =  f2(2)//返回第三层函数

f3(3).then(res=>{
    console.log(res);
})







