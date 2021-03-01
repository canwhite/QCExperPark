/*
简单理解：
原型：prototype  原型为构造函数的实例共享了属性和方法
链：__proto__ 可以理解为一个指针，它是实例对象中的一个属性，
指向了构造函数的原型（prototype）。

一个实例对象，在调用属性和方法时，会依次从：

实例本身=> 构造函数原型 => 构造函数原型的原型

*/

function Student(name){
    this.name = name;
}
Student.prototype.study = function(){
    console.log("I like study");
}

const student = new Student("xiaoming");
student.study();

console.log(student.toString());

// 在实例中没找到。
// 在构造函数的原型上也没找到。
// 在构造函数的原型的原型上找到了。
// 实际调用的是 student.__proto__.__proto__.toString 也就是 Object.prototype.toString。
// 所以源头就是Object