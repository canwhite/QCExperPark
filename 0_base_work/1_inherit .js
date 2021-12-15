//构造函数实际上写成小写也是可以的，没什么影响，只是约定俗称的我们需要把首字母大写
function Animal(){
    this.sayHello = function(){
        console.log("I am an animal");
    }
}
/* Animal.prototype.sayHello = function(){
        console.log("I am an animal");
} */

function Dog(){
    this.name = "dog";
}
//基于链的继承能够拿到链上的数据
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

let dog = new Dog();
dog.sayHello();
console.log(dog.name);


//基于apply和call函数的继承
//这种继承关系的缺陷是拿不到原型链上的数据
function Cat(){
    Animal.apply(this,arguments);
    this.name = "cat";
}

let cat = new Cat();
cat.sayHello();
console.log(cat.name);


//通过class语法糖继承

class Company{
    constructor(){
        this.name = "公司";
    }
    run(){
        console.log("公司运行");
    }
}

class MoneyCompany extends Company{
    constructor(name){
        //这里相当于call
        super(...arguments);
        //继承来的name
        console.log(this.name);

        //当super.property作为setter的时候相当于this
        super.name = "造币";
        console.log(this.name);

        
        //当super.property作为getter的时候,相当于[[prototype]]
        console.log(super.name == this.prototype)

        //当super调用方法，相当于Company.run.call(this);相当于call之后调用
        super.run()

    }


    //在构造函数外定义的方法，相当于在prototype上定义
    sayHello(){
        console.log("我要造钱");
    }

}

let money = new MoneyCompany("人民币");
console.log("proto",money.name);
money.name = "美元";
console.log(money.name);//这相当于将链上内容遮蔽
//sayHello相当于在原型上定义
money.sayHello();
money.__proto__.sayHello();
