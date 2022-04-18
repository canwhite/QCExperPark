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
let sorted = Object.entries(obj).sort((a,b)=>{
    //拿值做比较
    return b[1]-a[1]
})
console.log(sorted);
let top =  sorted.slice(0,1);
//然后我们取到key值
let topkey =  top.map(item=>item[0]);
console.log(topkey);