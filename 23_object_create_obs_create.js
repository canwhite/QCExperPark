/* import { Observable } from 'rxjs'; */

let Observable = require('rxjs').Observable
function StateSubject(value) {
  this.observerList = [];
  this.value = value;
}
//将StateSubject的原型指向Observable，然后相当于对其的一个继承
StateSubject.prototype = Object.create(

  
  Observable.create(function(observer) {
    if (typeof this.value !== "undefined"){
      observer.next(this.value);
    } 
    //每次新建，都会往list里边传递一个
    this.observerList.push(observer);
  })

);
//执行next对应使用这个值的都会遍历
StateSubject.prototype.next = function(val) {
  this.value = val;
  this.observerList.forEach(observer => {
    observer.next(val);
  });
};

let obj1 = new StateSubject(1);
let obj2 = new StateSubject();

//也就是说，重要的是继承生成一个subject，内部定义的方法并
obj1.next(2);
console.log(obj1.value);
console.log(obj1.observerList);


