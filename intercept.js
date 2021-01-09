let obj = {

};//创建一个空对象

obj.intercept = {

    call:(...args)=>{
        console.log(...args,'------intercept call');
    }
}



//接着往下执行

let params = ['6','7'];


// args({ before, after } = {}){
//     let allArgs = params;
//     //这里的意思是，新加进来的值，是放在参数数组之前还是之后
//     if (before) allArgs = [before].concat(allArgs);
//     if (after) allArgs = allArgs.concat(after);
//     if (allArgs.length === 0) {
//         return "";
//     } else {
//         return allArgs.join(", ");
//     }
// }

// if(obj.intercept.call){

//     obj.intercept.call(args({before:undefined}))
// }