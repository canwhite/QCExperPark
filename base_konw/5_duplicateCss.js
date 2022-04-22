//如何规避css多人开发样式覆盖的问题
//总纲来自于这个规范：https://juejin.cn/post/6935245880568053791
/*-------------------------------------------------

(1)Bem规范================================
是块（block）
元素（element）
修饰符（modifier），
由 Yandex 团队提出的一种前端 CSS 命名方法论。

__ 双下划线：双下划线用来连接块和块的子元素
-- 双中横线：用来处理后置状态
_ 单下划线：单下划线用来描述一个块或者块的子元素的一种状态
注：_ 单下划线这种用的比较少

eg:
<div class="article">
    <div class="article__body">
        <div class="tag"></div>
        <button class="article__button--primary"></button>
        <button class="article__button--success"></button>
    </div>
</div>

推荐写法和风格
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }

less或者sass中的使用

.article {
    max-width: 1200px;
    &__body {
        padding: 20px;
    }
    &__button {
        padding: 5px 8px;
        &--primary {background: blue;}
        &--success {background: green;}
    }
}





(2)css-loader（CSS Module）==================
使用webpack的css-loader可以在打包项目的时候指定该样式的scope
  // webpack config
  module.exports = {
    module: {
     loaders: [
        { 
          test: /\.css$/, 
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
        },
      ]
   },
   ...
}
https://webpack.js.org/loaders/css-loader/





(3)css-in-js==================================

几种框架的比较：
从体积来看：emotion的体积是最小的。
从技术生态环境（以及流行程度）：styled-components的star最多，文档相对来讲也是最完善的。
从支持的特性来看：emotion、aphrodite、jss支持的特性是最多的。
所以新人可以尝试接触styled-components，综合来看emotion是一个相当不错的选择。
总结：
styled-components

emotion(感情)使用

  import React from 'react';
  import { css } from 'emotion'
  const color = 'white'
  function App() {
    return (
      <div className={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
       border-radius: 4px;
       &:hover {
         color: ${color};
       }
     `}>
       This is emotion test
     </div>
   );
 }
export default App;



在emotion实例化的时候（也就是我们在组件中import { css } from 'emotion'的时候），
首先调用了create-emotion包中的createEmotion方法，
这个方法的主要作用是初始化emotion的cache（用于生成样式并将生成的样式放入<head>中


---重要 start ---
emotion的cache用于缓存已经注册的样式，也就是已经放入head中的样式。
在生成cache的时候，使用一款名为Stylis的CSS预编译器对我们传入的序列化的样式进行编译，
同时它还生成了插入样式方法（insert）。
---重要 end   ---

这是emotion中比较重要的方法，
它其实是调用了serializeStyles方法来处理css方法中的参数，
然后使用insertStyles方法将其插入html文件中，最后返回class名，
然后我们在组件中使用<div className={css('xxxxx')}></div>的时候就能正确指向对应的样式了。



-------------------------------------------------*/