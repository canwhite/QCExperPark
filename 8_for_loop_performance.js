/*
如果只谈性能，显然是 for > forEach > map，

1、for 循环当然是最简单的，因为它没有任何额外的函数调用栈和上下文；
2、forEach 其次，因为它其实比我们想象得要复杂一些，它的函数签名实际上是：
    array.forEach(function(currentValue, index, arr), thisValue)

    它不是普通的 for 循环的语法糖，还有诸多参数和上下文需要在执行的时候考虑进来，
    这里可能拖慢性能；

3、map 最慢，因为它的返回值是一个等长的全新的数组，数组创建和赋值产生的性能开销很大。


*/