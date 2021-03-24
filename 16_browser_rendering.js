/*
浏览器渲染的过程：
1.浏览器解析html标签，构建dom树 ps：om即object model的意思
2.浏览器解析css，构建cssom树
3.将dom和cssom树相结合，生成render tree
4.得到render tree，计算位置信息，做layout
5.layout之后，开始painting过程

---------------------------------------
PS： 加载的同步和异步

javascript的加载默认是同步的，可以放在末尾
css是异步的，应该放在文件头部
---------------------------------------
这里有个很有意思的点：
chrome (音[krəʊm])认为样式还没有就显示体验不好，所以在css加载完之前，页面空白
firefox 可能害怕被卸载，总是先显示点啥，cssom加载后会突然把样式加载上去，吓用户一跳，
所以叫无样式闪烁

那么问题来了，javascript的加载我如果想让它异步怎么做？
给加defer 和 async


*/