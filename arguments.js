function test() {
    var s = "";
    //arguments本身是一个数组
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i] + ",";
    }
    console.log(s);
    return s;
}
//也就是说有了arguments参数，有些时候就不用定义形参了
test("name", "age");