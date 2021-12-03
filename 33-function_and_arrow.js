const person = {
    name:"abc",
    print:function(){
        console.log(this.name);
    }
}


//第一个正常输出
person.print()

const person1 = {
    name:"efg",
    print:()=>{
        console.log(this.name);
    }
}

//undefined,why? 虽然箭头函数没有this，但它不是指向了person1了吗？
//再学习一下箭头函数
person1.print();


//还有一种情况
//箭头函数是上级作用域找this