/*
ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。
它是 JavaScript 语言的第七种数据类型，
前六种是：
undefined、
null、
布尔值（Boolean）、
字符串（String）、
数值（Number）、
对象（Object）。

引入Symbol的原因：
防止对象属性名的冲突，产生了一个唯一值

*/

let s = Symbol();
typeof s
// "symbol"
console.log(typeof(s))



//加参数是为了区分描述
let s1 = Symbol('foo');
console.log(s1)





//关于symbol作为唯一标识符来使用

const targetSymbol = Symbol('target')


//然后牵涉到几种写法，我们这里随便看下哈


//写法一
let  a = {};
//给键赋值
a[targetSymbol] = 'hello';

console.log('-----a',a);


//写法二
let b = {

[targetSymbol]:'hello'

}

console.log('-----b',b);


//写法三
let c = {};
Reflect.set(c,targetSymbol,'hello');

console.log('----c',c);
