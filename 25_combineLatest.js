let { timer, combineLatest ,BehaviorSubject} = require("rxjs")
let { mapTo, delay, takeWhile } =require('rxjs/operators');

let One$ = new BehaviorSubject(1);
let Two$ = new BehaviorSubject(2);
let Three$ = new BehaviorSubject(3);

let Box$ = new BehaviorSubject(0);
// 当一个 timer 发出值时，将每个 timer 的最新值作为一个数组发出
const combined = combineLatest(One$, Two$, Three$);

//先发出再接收，和先接收再发出收到的结果数量不一样


let i =1;

One$.pipe(delay(2000)).next(2);//next的值会被暂存


/*------------------------------------------
如果拿只作一次变化的值可以直接使用外部变量去承接
---------------------------------------------
如果是反复变化的值建议用履带传输，
或者在一段时间之后，其不变化的时候用外部变量使用,
例如事件触发
--------------------------------------------*/

//BehaviorSubject: hot observable
//先监听再发布，因为监听的早，所以拿到的值也全
//如果是先发布再监听，拿到的值就不那么全了，就像听演唱会

Box$.subscribe(val=>{
    console.log("sub",val)
})

let that = this;
const subscribe = combined.subscribe(latestValues => {
    console.log(latestValues);
    //i只在第一次触发的时候赋值
    i = latestValues[0];
    that.i = latestValues[0];
    //内部变量跟随变化，如何拿到最新值呢，console.log(i);
    Box$.next(i);
  }
);
console.log("----that",that.i);

//但是跳出subscription变量的作用域，我们的i实际上持有的是第一次值
//其实根据作用域链也能理解，由内而外而不能由外而内
console.log("----",i);


One$.pipe(delay(3000)).next(5);


