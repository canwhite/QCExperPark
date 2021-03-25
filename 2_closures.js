//=================1.闭包的概念=======================
//闭包 ：有称为词法闭包，由函数创造的一个词法作用域
//js中return ()=>{} 对外提供一个访问内部变量的接口

function a(){
    var name = "dev";
    return ()=>{
        return name;
    }
}
//得到内部函数
var b = a();
//调用内部函数
console.log(b())


//===============2.闭包的应用场景===================


//a.保护函数内的变量安全,得到私有属性和私有方法


var foo = function() {
    var secret = 'secret';
    // “闭包”内的函数可以访问 secret 变量，而 secret 变量对于外部却是隐藏
    return {
        get_secret:function(){
            // 通过定义的接口来访问 secret
            return secret;
        },
        set_secret: function ( new_secret ) {
            // 通过定义的接口来修改 secret
            secret = new_secret;
        }
    }

};




let returnFoo = foo();//()执行，拿到返回值，也可以像上边那样
returnFoo.get_secret();
returnFoo.secret;
returnFoo.set_secret("hello");
console.log(returnFoo.get_secret());

/*
//PS：也可以做下自执行，直接拿到返回的对象或者函数，然后直接调用
var foo = (function() {
    var secret = "xxx";
    return { }
})();
foo.get_secret();
*/



//b.内存中维持一个变量。依然如前例，由于闭包，函数a中i的一直存在于内存中，可以实现自加操作

function Counter(start) {   
     var count = start;    
     return {        
         increment: function() { count++;}, //function increment
         get:function(){return count}
     }
}
var foo = Counter(4);
foo.increment();
foo.get(); // 5
console.log(foo.get());





//3.闭包的释放

//如果闭包函数被外部变量接收，那么这个存在于堆内存上的闭包函数对象就一直存在着
//因为它被外部引用着，只要外部作用域不退出，就不会被垃圾回收清除

function fn () {
    let a = 1;
    let b = 2;

    return function () {
        console.log(a); 
    }
}

let foo = fn();
foo();

//foo就是一个外部变量
