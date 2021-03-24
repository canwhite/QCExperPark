//memoize接收一个函数参数，返回一个函数
var memoize = function(f){
    //自给自足
    var cache = {};

    return function(){
        console.log("arg", typeof arguments);//type object {"0":2}
        
        var arg_str = JSON.stringify(arguments);//序列换转化成字符串 {"0":2}

        //cache第一次没值，走到后边的调用传入函数自身，得到返回值，存起来 2*2 = 4
        //如果调用一次之后，甚至不用重新绑定，直接就可以使用
        cache[arg_str] = cache[arg_str] || f.apply(f,arguments);
    
        return cache[arg_str];
    }
}



//memoize里的函数
var squareNumber  = memoize(function(x){ return x*x; });
//执行函数得到结果
squareNumber(2)//4
squareNumber(4)//16

/*
//这里的有趣之处是我们并没有发出一个请求——只是返回了一个函数，当调用它的时候才会发请求，像上边一样
//这个函数之所以称为纯函数，是根据输入，他总能返回相同的函数，也即有相同的输出
var pureHttpCall = memoize(function(url, params){
    return function() { return $.getJSON(url, params); }
});


*/