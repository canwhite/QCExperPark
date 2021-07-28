

/* 
--------------------
一、cold vs hot
--------------------

Cold Observables:

我们可以把 Cold Observables 理解为在手机网易云音乐 APP 上听歌：
APP 里的歌曲资源是 Cold Observables，
听歌的人是 observers。
如果没有人打开 APP 去播放这首歌，这首歌不会自己播放。
每份都是单独的歌曲实例，都是从头开始听，互相不会影响。


Hot Observables:

而 Hot Observables 可以理解为演唱会：
比如我们去看一场演唱会，没有迟到的小伙伴（A）可以从第一首歌开始听，
迟到的小伙伴就（B）只能从第二首或者更晚的歌开始听；
小伙伴 A 和 B 共享同一个演唱会实例，是从订阅开始接受到值，



let obs$ = from([1, 2, 3, 4, 5]).pipe(
    publish()
) as ConnectableObservable<any>;

obs$.connect();

obs$.subscribe(data => { console.log("1st subscriber:" + data) });
setTimeout(() => {
    obs$.subscribe(data => { console.log("2st subscriber:" + data) });
}, 2100);

那怎么创建 Hot Observables 呢？
在上面的 Hot Observables 代码里，
用到了
*publish 操作符，
*ConnectableObservable，
*connect() 
方法创建 Hot Observables

推荐publish操作符




----------------------------
二、四种特殊的hot Observable
----------------------------

**Subject
**BehaviorSubject，
**AsyncSubject，
**ReplaySubject；

这四种 Subject 都是特殊的 Observable。
首先它们都是多播的，是hot的

它们特殊在哪呢？

因为它们既是生产者又是消费者


private shareData: Subject<string> = new Subject<string>();

sendData(value: string) {
    this.shareData.next(value);
}
getData(): Observable<string> {
    return this.shareData.asObservable();
}
next(value)让它作为生产者存在
asObservable()又让它可以作为消费者

-----------------------
三、BehaviorSubject
-----------------------

//BehaviorSubject可以返回“当前值”，
//所谓当前值，相当于把接收到的最新值保存了下来
//不像别的subject，一段时间之后拿不到任何值，因为值都被发完了

-----------------------
四、看到了一种神奇的代码
-----------------------

const { BehaviorSubject, of }  = require("rxjs");

let _subscription = {
    unsubscribe: function() {}
};

let obs1 = new BehaviorSubject("1");
let obs2 = new BehaviorSubject("2");
//这个方法可以让_subscription成为obs，拥有取消订阅的功能，但是有什么实际意义吗
_subscription = obs1.subscribe(obs2);
console.log("=====",_subscription);

//既不等于obs1，也不等于obs2
console.log(_subscription === obs1);//false
console.log(_subscription === obs2);//false




 */



const {BehaviorSubject} = require("rxjs");

class StateMachine{
    constructor(subject,value){
        this.subject = subject;
        this.value = value;
    }

    producer(action){
        let oldValue = this.value;
        let newValue;
        switch (action.type) {
            case 'plus':
              newValue = ++oldValue;
              this.value = newValue;//将新值给this.value
              this.subject.next(newValue);
              break;
            case 'toDouble':
              newValue = oldValue * 2;
              this.value = newValue;
              this.subject.next(newValue);
              break;
          }

    }

}

//创建初始值
const value = 1;//状态的初始值

const count$ = new BehaviorSubject(value);
const stateMachine = new StateMachine(count$,value);

// 传递值的方法
function dispatch(action) {
    //定义是在producer
    stateMachine.producer(action);
}
  
//监听，流水线终点
count$.subscribe(val => {
    console.log(val);
});
  
//流水线开始
setTimeout(() => {
    //触发
    dispatch({
        type: "plus"
    });
}, 1000);
  
setTimeout(() => {
    dispatch({
        type: "toDouble"
    });
}, 2000);




