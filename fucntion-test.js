const sum = new Function('a', 'b', 'return a + b');
//参数 "a" 和 "b" 是参数的名字，在函数体中被使用，"return a + b"
console.log(sum(2, 6));

//这部分用node运行的时候报错，但是我用quickjs运行的时候就没有问题
//难道是node对这个还不支持，233333

