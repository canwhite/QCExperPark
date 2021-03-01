/*
javascript中event loop 
异步线程 宏任务和微任务的执行顺序
宏任务(macrotask)和微任务(microtask)，这两个任务分别维护一个队列，
均采用先进先出的策略进行执行

常见的宏任务：
   script(整体代码)
   setTimeout
   setInterval
   I/O
   UI 
   交互事件

常见的微任务：
    Promise
    Async
    MutationObserve
    process.nextTick (Node)

宏任务队列(macrotask)一次只从队列中取一个任务执行,
执行完成后就需执行微任务队列中的任务
微任务队列中所有的任务都会被依次取出来执行，直到微任务队列为空
*/
console.log(1)
new Promise(function(resolve){
    // tag 1,这部分相当于同步执行
    console.log(2)
    resolve(3)
}).then(function(data){
    // tag 2
    console.log(data)
})
console.log(4);
setTimeout(function(){
    // tag 3
    console.log(5);
},0)

setTimeout(function() {
    // tag 4
    new Promise(function(resolve) {
        // tag 5
        console.log(6);
        resolve();
    }).then(function() {
        // tag 6
        console.log(7);
    });
    console.log(8)
},0);

console.log(9)

/*
    1.第 25 行：执行 console.log(1), 输出 1；
    2.第 28 行：遇到Promise, 执行 tag1 的代码，输出 2， 并将其回调(tag2) 放入微任务队列；
    3.第 34 行：执行 console.log(4), 输出 4；
    4.第 36 行：第遇到setTimeout, 将回调(tag3) 放入宏任务队列
    5.第 41 行：第遇到setTimeout， 将回调(tag4) 放入宏任务队列
    6.第 53 行： 执行 console.log(9), 输出 9
    7.第一个宏任务(Script代码段)执行完毕，检查微任务队列是否存在任务，
    存在 console(data)(第 2 步添加)，执行并输出 3
    8.获取下一个宏任务（第4步添加），执行 tag3 console.log(5),输出 5
    9.宏任务执行完毕，检查微任务队列是否存在任务，队列为空
    10.获取下一个宏任务（第5步添加），执行 tag4，执行 tag5 中的 console.log(6);
    输出 6， 将其回调(tag6)放入微任务队列；执行 console.log(8), 输出 8
    11.宏任务执行完毕，检查微任务队列是否存在任务，执行 tag6(第10步添加), console.log(7); 输出 7
    12.宏任务为空。代码执行结束
*/