const getRes = new Map()

//执行done方法
function done(data){


    //注意这个getId是一个key,valueData是key对应的Value
    for (const [getId, valueData] of data.res) {
        console.log('-------key',getId);
        console.log('-------value',valueData);

        const resolve = getRes.get(getId) //getRes是一个map
    
        //但是这个方法是一定报错的
        if (!resolve) throw new Error('invalid get id')
    
    
        getRes.delete(getId)
    
        resolve(valueData)
    
      }

}

// const iterable = new Map([['one', 1], ['two', 2]]);
 
// for (const [key, value] of iterable) {
//   console.log(`Key: ${key} and Value: ${value}`);
// }


let data = {

    type: 'done',
    flushId: 1,
    res:[['name', 1] ]

}

//然后具体执行
done(data);