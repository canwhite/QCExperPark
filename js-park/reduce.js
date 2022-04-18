/*
reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，
每一次运行 reducer 会将先前元素的计算结果作为参数传入，
最后将其结果汇总为单个返回值。
*/
const arr1 = [1,2,3,4];
const initValue = 0;

//handle对数组进行连续操作，返回单一结果
function handle(pre,current){
    return pre+current;
}

const sumWithInit = arr1.reduce(handle,initValue);
console.log("sum",sumWithInit);
