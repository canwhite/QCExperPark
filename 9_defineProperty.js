let o ={}
//配置configurable为true，描述符才能被修改，属性才能被删除
Object.defineProperty(o, 'key', {
    value: '1',
//     如果不指定这些属性描述符，默认都是false
//     configurable: false,
//     writable: false,
//     enumerable: false
})
console.log(o.key) // 1
console.log(delete o.key) // false 尝试两种方案删除属性
console.log(Reflect.deleteProperty(o, 'key')) // false
console.log(o.key) // 1 由于不可配置，属性未被删除
