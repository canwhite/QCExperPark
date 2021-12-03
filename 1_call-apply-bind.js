//（1）首先call和apply的区别
//===相同点===
//它们都是为了改变一个函数的this指向,指向第一个参数
//===不同点===
//参数类型不同

let obj = {a:'i am obj'}

let exper = {
    f(x,y){
        console.log(x,y,this);
    }
}

//参数是数组
exper.f.apply(obj,[1,2])

//参数是单个存放
//实际上我比较喜欢call，它满足函数给参的特点
exper.f.call(obj,1,2)


//（2）再有，call和bind
//作用是一样的
//区别，
//call是立即执行函数，bind是需要手动执行

exper.f.call(obj,3,4);
var g = exper.f.bind(obj);
g(5,6);


//那么连续作业会是一种什么情况呢？
let o1 = {
    a:"123",
    say:function(){
        console.log(this.a);
    }
    
}
let o2 = {
    a:"456",
    say:function(){
        console.log(this.a);
    }
}
let o3 = {
    a:"789",
    say:function(){
        console.log(this.a);
    }
}

o1.say.bind(o2).apply(o3);
//456
//先bind再apply猜猜最后输出的是啥？




