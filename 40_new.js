/* 
1.创建一个新的对象
2.继承父类原型上的方法.
3.添加父类的属性到新的对象上并初始化. 保存方法的执行结果.
4.如果执行结果有返回值并且是一个对象, 返回执行的结果, 
否则, 返回新创建的对象。 */


function _new(obj,...rest){

    // 创建一个空的对象
    var newObj = new Object(),

    // 拿到构造函数obj
    Constructor = [].shift.call(arguments);

    // 构造函数通过__proto__和原型相连
    obj.__proto__ = Constructor.prototype; //原型

	// 将newObj，将构造函数指向new Obj, 然后挂载arguments
    var ret = Constructor.apply(newObj, arguments);

	// 返回值一定是一个对象
	return ret instanceof Object ? ret : obj;
    
}

function Person(firtName, lastName) {
    this.firtName = firtName;
    this.lastName = lastName;
    /* return {
        fullName: `${this.firtName} ${this.lastName}`
    }; */   
    return 'demo'; 
}

//PS:
//(1)如果返回对象，返回有效为{ fullName: 'Chen Tianbao' }
//(2)如果返回Number或者字符串，返回无效为，还是返回对象 Person { firtName: 'Chen', lastName: 'Tianbao' }



const tb = new Person('Chen', 'Tianbao');
console.log(tb);

const tb2 = _new(Person, 'Chen', 'Tianbao');
console.log(tb2)


