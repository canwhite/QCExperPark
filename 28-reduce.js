//reduce()方法对数组中的每个元素执行一个由您提供的reducer函数(按数组顺序执行)
//将起结果汇总为单个返回值
//累加案例
const arr = [4,3,2,1];
const reducer = (p,c) =>{
    return p +c;
}
console.log(arr.reduce(reducer));