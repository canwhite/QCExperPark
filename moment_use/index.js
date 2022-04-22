let moment = require("moment")

let d0 = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
console.log("time0",d0);

// ------------------减3 天-----------------------------------
//没有format，显示的是一个Moment对象
let d1 =  moment().subtract(3, 'days').format("YYYY-MM-DD");
console.log("time1",d1);
// -------------------加1 天-----------------------------------
let d2 =  moment().add(1, 'days')
console.log("time1",d2);

// 加减字符串
// years quarters months weeks days hours minutes seconds milliseconds


//diff
let m1 = moment('2018-08-14 10:00:00')
let m2 = moment('2018-08-14 11:00:50');

// 2018-08-14 11:00:01 - 2018-08-14 11:00:00 = 1
// 注意这里用单数
console.log(m2.diff(m1, 'hour')) 