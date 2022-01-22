const arr = [
    {id:"29",pid:"",name:"总裁办"},
    {id:"2c",pid:"",name:"财务部"},
    {id:"2d",pid:"2c",name:"财务核算部"},
    {id:"2f",pid:"2c",name:"薪资管理部"},
    {id:"d2",pid:"",name:"技术部"},
    {id:"d3",pid:"d2",name:"Java研发部"}
]

//最上一层pid是空字符串，所以从空字符串开始
function filterArr(list,pid=""){
    //将pid一致的放在一组
    let newArr = list.filter(item => item.pid == pid);
    //循环
    newArr.forEach(item=>{
        item.children = filterArr(list,pid=item.id);
    })
    return newArr;
}

const list = filterArr(arr);
console.log(list);
