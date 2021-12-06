let obj = {};
let arr = [];
if(obj){
    console.log("--1--");
    //obj在if判断的时候，先 valueOf then toString 只要不是空字符串，就返回为true
    console.log("--valueOf then toString--",obj.valueOf().toString());
    
}

//arr类似上边的情况
if(arr){
    console.log('--2--');
}

/*
原始类型和引用类型做比较时，引用类型会依照ToPrimitive规则转换为原始类型。
⭐️ToPrimitive规则，是引用类型向原始类型转变的规则，
它遵循先valueOf后toString的模式期望得到一个原始类型
*/
