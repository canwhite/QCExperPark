//函数柯里化实际上是对闭包的一种运用
//只传递给函数一部分参数来调用它
//让它返回一个函数来处理剩下的参数

var add = function(x){

    return function(y){
        return x+y;
    }

}

var increment = add(1);//返回一个函数，这个函数已经持有x
var data = increment(2);//再在返回的函数里放入y
console.log(data);
