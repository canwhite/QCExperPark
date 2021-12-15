/*

match 返回匹配结果
test 用正则测试字符串、
pS：变量执行顺序
match是字符串去匹配pattern，返回匹配内容
test和replace都和它相反


replace 匹配并替换字符串中的内容
PS：第一个参数pattern，第二个是要替换的内容



(1)几种括号-----------------------------------------------

小括号：可以分组(red|black|yellow)，搭配|管道符
中括号：指定范围[a-z] [^abc]
大括号：限定次数{n},{n,m}

先后顺序是分组=>范围=>次数

(2)语法糖（反斜杠+字母）-----------------------------------
\d 数字字符
\s 空白字符
\w 字母
反斜杠 + 上述大写字母正好相反
另外还有一个. 用来匹配任意字符


(3)*和*?的区别，*贪婪量词，*?惰性量词----------------------
var re1 = /.*bbb/g;    //贪婪，先吃再吐，返回匹配
var re2 = /.*?bbb/g;   //惰性，吃着匹配着，匹配到了就不吃了


(4)环视，更多的是表示一个位置
?= 肯定环视
正则:abc(?=def) 能够匹配其中的abc, 
这里?=def 匹配的是一个位置，即d的位置，然后这个位置前面有abc 三个字符，所以匹配成功

?<=肯定逆序环视
这个就返回值和上边相反，是def


?! 否定环视 
?<!否定逆序环视



var reBed = /(bed(?=room))///在我们捕获bed这个字符串时，抢先去看接下来的字符串是不是room
alert(reBed.test(str1));//true

var reBed = /(bed(?!room))/  //要来它后面不能是room
alert(reBed.test(str1))//false

var html = "<p><a href='http://www.cnblogs.com/rubylouvre/'>Ruby Louvre</a></p><hr/><p>by <em>司徒正美</em></p>";
var text = html.replace(/<(?!hr)(?:.|\s)*?>/ig,"") //将后边不是hr的标签置换为空
alert(text)//Ruby Louvre<hr/>by 司徒正美



(4)一些实例属性
/i (忽略大小写)
/g (全文查找出现的所有匹配字符)
/ig(全文查找、忽略大小写)
/m (多行查找)




(4)一个题目-----------------------------------------------
取出abcdefg中的efg的正则表达式



*/

//肯定环视，取前边，后边括
let ptn = /.*?(?=efg)/;
let dt = "abcdefg".match(ptn);
console.log("--data1--",dt[0]);



//肯定逆，取后边，前边括
let pattern = /(?<=.*?)efg/;
let data =  "abcdefg".match(pattern);
console.log("---data2---",data[0]);


