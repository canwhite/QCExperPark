
//1.防抖

/*===============================================================
防抖解决的是stream的问题，当在流动的时候，我就不操作
当流动停止的时候我再操作，是为了节省资源

eg： 我输入框一直在输入的时候，就不去发出请求，当输入停止的时候我再操作
     这样就只需要请求最终结果
================================================================*/


//模拟一段ajax请求
function ajax(content) {
    console.log('ajax request ' + content)
}
  
function debounce(fun, delay) {
    return function (args) {
        let that = this
        let _args = args
        //如果没到时间就会清理重新计数
        clearTimeout(fun.id)
        fun.id = setTimeout(function () {
            //fun在这里
            fun.call(that, _args)
        }, delay)

    }
}
      
let inputb = document.getElementById('debounce')

//接受一个函数和时间，返回一个闭包函数
let debounceAjax = debounce(ajax, 500)
  
inputb.addEventListener('keyup', function (e) {
    //接收参数，开始执行请求
    debounceAjax(e.target.value)
})


//2.节流
//规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

function throttle(fun, delay) {
    let last, deferTimer
    return function (args) {
        let that = this
        let _args = arguments
        let now = +new Date()
        if (last && now < last + delay) {
            clearTimeout(deferTimer)
            deferTimer = setTimeout(function () {
                last = now
                fun.apply(that, _args)
            }, delay)
        }else {
            last = now
            fun.apply(that,_args)
        }
    }
}

let throttleAjax = throttle(ajax, 1000)

let inputc = document.getElementById('throttle')
inputc.addEventListener('keyup', function(e) {
    throttleAjax(e.target.value)
})





