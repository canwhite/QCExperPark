let obj = {
    a:1,
    b:2,
    c:3
}
/* console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
 */
//进行排序
//Object.entries(obj) 得到的是一个二维数组
//内部的单个item是个数组，第一个元素对应key，第二个元素对应value
let sorted = Object.entries(obj).sort((a,b)=>{
    //拿值做比较
    return b[1]-a[1]
})
console.log(sorted);
//slice对数组切片，split对字符串切片
//slice是起始位，split是根据标识符切分
let top =  sorted.slice(0,1);
//然后我们取到key值
let topkey =  top.map(item=>item[0]);
console.log(topkey);