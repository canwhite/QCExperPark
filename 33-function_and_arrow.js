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
var obj = {
    birth: 1990,
    getAge: function (year) {
        var b = this.birth; // 1990
        var fn = (y) => y - this.birth; // this.birth仍是1990
        return fn.call({birth:2000}, year);
    }
};
const result =  obj.getAge(2015); // 25
console.log("---",result);