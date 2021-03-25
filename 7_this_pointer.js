

// ---------------1.首先说下普通函数的this--------
var obj = {
    a: function() {
        console.log(this);
    }
}
var b = obj.a;
b();

// 执行b()的时候
// 因为在上下文中，没有明显的调用者，是window调用它，所以指向的是window

// so：简单来说，this指向函数的调用者





// --------------2.setTimeout的this---------------

function foo() {
    console.log("id1:", this.id);
    console.log("this1:", this);
    setTimeout(function() {
        console.log("id2:", this.id);
        console.log("this2:", this);
    }, 0);
}

var id = 21;

foo();

// Chrome
// id1: 21
// this1: window
// id2: 21
// this2: window



// 超时调用（setTimeout回调）的代码都是在全局作用域环境中执行的，
// 因此（setTimeout回调）函数中this的值在非严格模式下指向window对象，在严格模式下是undefined




// --------------3.ES6的箭头函数的this--------------

function foo() {
    console.log("--id1--:", this.id);
    console.log("this1:", this);
    setTimeout(() => {
        console.log("--id2:--", this.id);
        console.log("this2:", this);
    }, 0);
}

var id = 21;

foo();

// Chrome
// --id1--: 21
// this1: window
// --id2:-- 21
// this2: window


// 根本原因是箭头函数没有this，而是运行是使用父级的this
// 当然我们可概念外层代码块的this指向从而改变箭头函数中this的指向

foo.call({id: 42});

// Chrome
// id1: 42
// this1: {id: 42}
// id2: 42
// this2: {id: 42}



//=======================4.构造函数中的this==============================

//指向生成的实例本身




