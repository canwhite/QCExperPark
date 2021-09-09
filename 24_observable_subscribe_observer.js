const { BehaviorSubject, of,Subject }  = require("rxjs");

let _subscription = {
    unsubscribe: function() {
      
    }
};

let obs1 = new  Subject();
let obs2 = new  Subject();

obs2.subscribe(val=>{
  console.log(val);
})

//obs1是observable，是生产者，
//obs2是observer是消费者，这样理解的话，
//obs1的值拿过来之后实际上有一个传递
//--即：消费者拿到生产者的值之后，又传递了一次
_subscription = obs1.subscribe(obs2);
obs1.next(1);


//上述代码在1000ms时，执行了subscription.unsubscribe()，从而终止了该启动中的流，后续的输出都不会触发next函数，
//但这并不意味着observable不存在了，该定时器的回调依旧会执行，只是因为流已经关闭，不会执行next的回调。
//从这里看到上边的方法并不是为了终止


_subscription.unsubscribe();
// console.log(obs2);

