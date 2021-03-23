//1.typeof data判断数据类型只能判断基本数据类型
//对于引用数据类型就不准确了

var s = "hello";
console.log(typeof s);
/*
返回值：
string, 
number, 
boolean, 
undefined, 
object( null 也返回object), 
function, 
symbol
*/


//2.A instanceof B
//实例A在不在B的构造函数中
let reg = new RegExp()
console.log(reg instanceof RegExp)

