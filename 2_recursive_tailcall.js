//这个是看到朋友分享的内容，加上我自己之前看了尾调用又没有总结
//直接在这里借用这个案例，总结一下

//普通递归
function commonFactorial(n){
    if(n===1) return 1;
    return n * commonFactorial(n-1);
}
console.time("common_start");
console.log("普通递归复杂度O(n)",commonFactorial(5))
console.timeEnd("common_start");


//尾调用递归
function tailFactorial(n,total){
    if(n===1) return total;
    return tailFactorial(n-1,n*total);
}
function superFactorial(n){
    return tailFactorial(n,1);
}

console.time("tail_start");
console.log("尾递归复杂度O(1)",superFactorial(5));
console.timeEnd("tail_start");
