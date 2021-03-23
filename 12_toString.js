//1.toString可以返回对应不同标签的构造函数，
//so可以用来判断了类型
let arr = [1,2,3];
var data =  Object.prototype.toString.call(arr);
console.log(data);



//2.可以做进制转换
var a = 10;
//转化成2进制、8进制、16进制大体差不多
var a1 =  a.toString(2);
console.log(a1);