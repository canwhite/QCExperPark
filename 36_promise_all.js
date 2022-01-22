const { async } = require("rxjs");

let a = ()=>{
    return new Promise((resolve,reject)=>{
        resolve(1);
    })
}
let b = ()=>{
    return new Promise((resolve,reject)=>{
        reject(2);
    })
}

let c = ()=>{
    return new Promise((resolve,reject)=>{
        resolve(3);
    })
}
//依次执行这三个并将返回promise收集
let plist = [a,b,c]

let list = [];
for(let i =0; i< plist.length;i++){
    let res = plist[i]();
    list.push(res);
}
// console.log("list",list);
//只要任何一个输入的promise的reject回调执行或者输入不合法的promise就会立即抛出错误，并且reject的是第一个抛出的错误信息。
//对应的是单个promise事件的错误
const run = async ()=>{
    let data = await Promise.all(list);
    console.log("--data--",data);
}
run();





