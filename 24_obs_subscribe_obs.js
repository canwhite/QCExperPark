const { BehaviorSubject, of }  = require("rxjs");

let _subscription = {
    unsubscribe: function() {}
};

let obs1 = new BehaviorSubject("1");
let obs2 = new BehaviorSubject("2");
//这个方法可以让_subscription成为obs，拥有取消订阅的功能，但是有什么实际意义吗
console.log(obs2);
_subscription = obs1.subscribe(obs2);


//_subscription既不等于obs1，也不等于obs2

_subscription.unsubscribe();
console.log(obs2);

/* subs <ref *1> SafeSubscriber {
    initialTeardown: undefined,
    closed: false,
    _parentage: null,
    _teardowns: [
      Subscription {
        initialTeardown: [Function (anonymous)],
        closed: false,
        _parentage: [Circular *1],
        _teardowns: null
      }
    ],
    isStopped: false,
    destination: {
      next: [Function (anonymous)],
      error: [Function (anonymous)],
      complete: [Function (anonymous)]
    }
  }
  obs1 BehaviorSubject {
    closed: false,
    observers: [],
    isStopped: false,
    hasError: false,
    thrownError: null,
    _value: '1'
  } */

  //输出之后我们会看到一个新概念叫做SafeSubscriber

