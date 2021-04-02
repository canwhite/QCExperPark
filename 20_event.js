/*
======================Pre1:Event===============
表示在 DOM 中出现的事件。一些事件是由用户触发的，例如鼠标或键盘事件；
而其他事件常由 API 生成，例如指示动画已经完成运行的事件，视频已被暂停等等。
--------
事件也可以通过脚本代码触发，例如对元素调用 HTMLElement.click() 方法，
或者定义一些自定义事件，再使用 EventTarget.dispatchEvent() 方法将自定义事件派发往指定的目标（target）。

======================Pre2:addEventListener==================

一般是对element添加监听，当然也可在window上使用
element.addEventListener(event, function, useCapture) 

(1)event-----第一个参数是注册的事件名，当然dom上也有一些默认注册，我们只需要直接监听就可以了
默认的事件名不需要写on，直接事件名执行就行
常见的有click，dbclick
鼠标的usedown等等

(2)function  事件句柄，事件触发执行事件

(3) useCapture  true-事件在捕获阶段执行，false-事件在冒泡阶段执行


------使用实例-------


<button id="myBtn">点我</button>
<p id="demo">

<script>

document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}
</script>


==================Pre3:dispatchEvent===============

相当于消费


==================Pre4:removeEventListener =========================

移除监听
var x = document.getElementById("myDIV");
if (x.removeEventListener) {                   // // 所有浏览器，除了 IE 8 及更早IE版本
    x.removeEventListener("mousemove", myFunction);
} else if (x.detachEvent) {                   // IE 8 及更早IE版本
    x.detachEvent("onmousemove", myFunction);
}

==================Pre5.实例使用部分========================================

1.创建和触发events

window.addEventListener('check', e => console.log(e.type))

var event = new Event('check')

window.dispatchEvent(event)


>check


---------------------------------------------------------------------
2. event will buble up to window

window.addEventListener('check', e => console.log(e.type))


//bubbles是指事件是否允许冒泡，cancelable是事件是否允许取消，如果使用document触发，并且要冒泡到window上，就需要用到这两个

var event = new Event('check', { bubbles: true, cancelable: false })

document.body.dispatchEvent(event) // event will buble up to window


>check debugger eval code:1:47
>true

*/