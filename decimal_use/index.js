const Decimal = require('decimal.js');//需要.js
const a = 9.999;
const b = 8.03;

//给每个值创建一个实例包一下，相当于转化为二进制
//然后提供官方给的加减乘除，然后对最后的值去四舍五入


// 加法
let c = new Decimal(a).add(new Decimal(b)) 
// 然后再做四舍五入
console.log("c",c.toFixed(2));
console.log("c",c);

// 减法
let d = new Decimal(a).sub(new Decimal(b))
console.log("d",d);

// 乘法
let e = new Decimal(a).mul(new Decimal(b))
console.log("e",e);

// 除法
let f = new Decimal(a).div(new Decimal(b))
console.log("f",f);
