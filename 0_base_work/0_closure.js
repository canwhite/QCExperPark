function closure(){
    let a = "123";
    return function(){
        let b = "456";
        console.log(a);
        console.log(b);
    }
}
let c = closure();
c()
