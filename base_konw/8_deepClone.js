//深拷贝
/*-----------------------------------------

1. ...展开运算符
因此该方法只能实现一级深拷贝， 二级及以上为浅拷贝
如果二级是对象和数组的话，一个更改另一方也受影响

2.assign方法
因此该方法只能实现一级深拷贝， 二级及以上为浅拷贝
和展开运算符同样的问题

3.slice和concat，因为着两个方法都会返回新数组
但是他们只对一维数组有效，对多维数组和对象无效

4.JSON.stringify和parse
缺点：null、undefinde、function、RegExp无法拷贝

5.递归深拷贝
使用递归的方法实现数组、对象深拷贝
然后循环引用需要优化，加一个cashData判断使用


------------------------------------------*/