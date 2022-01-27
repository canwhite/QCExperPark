async function asyncPool(poolLimit, array, iteratorFn) {
    const ret = [];
    const executing = [];
    for (const item of array) {
      const p = Promise.resolve().then(() => iteratorFn(item, array));
      ret.push(p);
  
      if (poolLimit <= array.length) {
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e);
        if (executing.length >= poolLimit) {
          //加trick
          await Promise.race(executing.map(function(item){
            return item.catch(function(err){
                return err;
            })
        }));
        }
      }
    }
    //trick，对err进行处理
    return Promise.all(ret.map(function(item){
        return item.catch(function(err){
            return err;
        })
    }))
}

const timeout = i => new Promise((resolve,reject) =>{
    setTimeout(() => {
        if(i == 3000){
            reject({error:i});
        }else{
            resolve({success:i});
        } 
    }, i)
})


asyncPool(5, [1000, 5000, 3000, 2000,1000,5000,5000,1000], timeout).then(res=>{
    console.log("---res",res);
}).catch(err=>{
    console.log("---err",err);
});
/* ---res [
    { success: 1000 },
    { success: 5000 },
    { error: 3000 },  
    { success: 2000 },
    { success: 1000 },
    { success: 5000 },
    { success: 5000 },
    { success: 1000 } 
  ] */








  