
//-------------1.先字符串序列化然后再parse,反序列化---------------
//正常拷贝点数组对象，是完全没问题的
//注意是string i fy 有一个i，不要漏掉，要不然不能识别
var obj = {
    key1:"123",
    key2:"456",
    key3:"789",
    key4:{
        data1:"abc",
        data2:{
            end:"xyz"
        }
    },
    test:function(){
        console.log("haha");
    },
    key5:undefined,
    key6:new RegExp()
}

var str = JSON.stringify(obj);
var data = JSON.parse(str);
console.log("------",data);

//当然这样使用有其弊端
/*
    1.序列化的结果会丢失函数和undefined
    2.如果obj里边有时间字符串，时间类型将会被转化为字符串
    3.RegExp、Error对象会被序列化为空对象{}
    4.如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null
    5.会丢弃实例对应的constructor，例如lili对应的Person
    6.如果对象中存在循环引用的情况也无法正确实现深拷贝

*/


//-----------------2.for循环加递归写个通用的方法---------------------

function deepClone(data){
    //1.拿到copy数据的类型
    const type = judgeType(data);
    let obj;
    
    //2.创建容器
    //arr
    if(type === "array"){
        obj = [];
    }
    //object
    else if(type == "object"){
        obj = {};
    }
    //基础数据类型
    else{
        return data; //如果是普通数据类型，在这里就返回了
    }

    //3.分类赋值
    //arr
    if(type  == "array"){
        for(let i =0; i<data.length; i ++ ){
            //如果第i个元素是array或者object的时候递归处理
            obj.push(deepClone(data[i]))
        }
    }
    else if(type == "object"){
        //对对象进行处理的时候时候for in,可以通过key遍历拿到value
        for(const key in data){
            obj[key] = deepClone(data[key]);

        }
    }
    //最终返回array或者object
    return obj;
}


function judgeType(obj){

    //toString会返回对应不同的标签的构造函数,所以可以判断类型
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
    };
    //对象可以拥有类型为元素节点、文本节点、注释节点的子节点
    //如果在浏览器端可以加上，这里注释了
    /*
    if(obj instanceof Element){
        return "element";
    }
    */
    //最后返回小写简写的部分
    return map[toString.call(obj)];

}


let deep = deepClone(obj);
console.log("deep",deep);