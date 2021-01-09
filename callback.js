let fn = (name,callback)=>{
    console.log(name);
    //对传入参数进行操作
    name = 'exec:' +  name; 
    //回调
    callback(name);

}

fn('zack',(res)=>{
    console.log(res);
})