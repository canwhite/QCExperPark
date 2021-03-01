/*
函数尾调用就是指函数的最后一步是调用另一个函数。
1.-----------区分一下尾调用和闭包---------------------
闭包是返回一个内部函数,内部函数可以访问外部函数的局部变量
--return ()=>{}   //返回内部函数需要外部调用
尾调用是在函数末尾返回一个函数调用
--return fn()     //返回调用
区别一个是返回内部函数,这个内部函数需要外部调用，一个是返回调用
2.-----------尾调用和尾递归---------------------------

(1)基础概念，调用栈和调用帧
函数在调用的时候会在调用栈（call stack）中存有记录，
每一条记录叫做一个调用帧（call frame），
每调用一个函数，就向栈中push一条记录，
函数执行结束后依次向外弹出，直到清空调用栈

一个例子：
function foo () { console.log(111); }
function bar () { foo(); }
function baz () { bar(); }

baz();

首先执行baz，
在调用栈里边push(baz)

然后baz方法中又执行了bar，
所以调用栈里又push(bar)

bar里又调用foo
所以调用栈中又push(foo)

等foo执行完pop之后，一层层往外pop，直到清空


-------------------------------------------
(2)尾调用或者称尾调用优化
function foo () { console.log(111); }
function bar () { return foo(); }
function baz () { return bar(); }

baz();

尾调用由于是函数的最后一步return操作，所以不需要保留外层函数的调用记录，
只要直接用内层函数的调用记录取代外层函数的调用记录就可以了，
调用栈中始终只保持了一条调用帧。


(3)尾递归是对尾调用的进一步使用


*/



//普通递归
function commonFactorial(n){
    if(n===1) return 1;
    //不是返回一个函数调用，而是一个表达式，称不上尾调用
    return n * commonFactorial(n-1);
}
console.time("common_start");
console.log("普通递归复杂度O(n)",commonFactorial(5))
console.timeEnd("common_start");


//尾调用递归
function tailFactorial(n,total){
    if(n===1) return total;
    return tailFactorial(n-1,n*total);
}
function superFactorial(n){
    return tailFactorial(n,1);
}

console.time("tail_start");
console.log("尾递归复杂度O(1)",superFactorial(5));
console.timeEnd("tail_start");
