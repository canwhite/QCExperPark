/*
基础使用：

Proxy通常和Reflect合作，Proxy用于代理，Reflect用于操作

*/
console.log('============基础使用=============')
var obj = {};

var hdr = {
    get(target,propKey,receiver){
        return Reflect.get(target,propKey);
    },
    set(target,propKey,value,receiver){

        //有'这一步才会真正设置上值，设置之后两者都会有
        return Reflect.set(target,propKey,value);
    }
}
var pxy = new Proxy(obj,hdr);
pxy.name = '456';
console.log('-----',obj);
console.log('-----',pxy.name);
console.log('-----',obj.name);

console.log("==========看下数组问题==========");
//proxy数组的本质是一个对象，但是方法都可以用
//proxy中的receiver是什么？
//在 Proxy trap 的场景下，这个 receiver 永远指向 Proxy 本身或者继承它的对象。
let arr = [1,2,3]
let proxy = new Proxy(arr, {	
   get: function (target, key, receiver) {
       console.log('get的key为 ===>' + key);
       return Reflect.get(target, key, receiver);
   },
   //set的时候第三个值是value，
   set(target, key, value, receiver){
       console.log('set的key为 ===>' + key, value);
       return Reflect.set(target, key, value, receiver);
   }
})

console.log("--arr--",proxy.length);

// let arrin = [1.2].includes((item)=>proxy)
// PS :可以和普通数组配合，把它当作普通数组就可以了
let arrin = [1,2,4].filter((item)=>proxy.includes(item));
console.log("arrin",arrin);



console.log("================this指向问题=======================")

/*
(2)this指向问题，一般this是指向proxy的
但是有时候我们用js的原生对象的时候，会遇到一些问题，我们需要把
this重新指向原生对象
*/

const target = new Date();
const handler = {
    get(target,propKey,receiver){
        if(propKey == "getDate"){
            //本身this是指向代理的，因为getDate只能
            //在原始对象上得到，这里让它重新指向Date
            return target.getDate.bind(target);
            //上边将target中的getDate的this指向，重新指向target本身
        }
        return Reflect.get(target,propKey);
    },
    //get和set是常用的两个操作
    set(target,propKey,value,receiver){
        
        console.log('=====',propKey,value);

    }
}

//一个技巧是，将Proxy对象，设置到object.proxy属性
//从而可以在object对象上调用

var object = {proxy: new Proxy(target,handler)};
var time =  object.proxy.getDate();
//最后得到的是这个月几号
console.log('-----',time);

object.proxy.time = "111";


console.log('-----',object);





