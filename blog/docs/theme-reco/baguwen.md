---
title: 常见八股文汇总
date: 2023/03/31
password: 268fa8ddcb20cb9c9d6b205774e45c32
---

--------------------------------------------------



### 什么是ajax, fetch, axios三者有什么区别？

  ajax是一种前后端交互技术的统称。

  和ajax不一样，fetch也是原生发ajax请求的一种方式。是浏览器原生的API，也是用于网络请求的。
  和XMLHttpRequest是一个级别。fetch语法更加简洁，易用，天生支持promise。
     ```js <script>
        function ajax01(url){
          return fetch(url).then(res=>res.json())
        }
        ajax01("https://www.ml.com/newslist");
      </script>
      ```

  axios是前端最最常用的网络请求lib，不管是vue中还是react中，首选axios。内部也是封装了XMLHttpRequest和fetch。

  总结：
    ajax是一种技术统称。
    fetch是一个原生api。
    axios是一个第三方库。

--------------------------------------------------
### 原生ajax发送请求的步骤？
```js
  <script>
    function ajax01(url,successFn){
      const xhr = new XMLHttpRequest();
      xhr.open("get",url,false)
      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status === 200){
            successFn(xhr.responseText)
          }
        }
      }
      xhr.send();
    }

    ajax01("http://www.xxx.com/newlist",function(res){
      console.log("res:",res);
    });
  </script>
```

--------------------------------------------------

### 什么是防抖，什么是节流？

  防抖：
    防止抖动，你先抖动着，啥时候停了，再执行下一步。如：一个搜索输入框，等输入停止之后，再触发搜索。

  节流：
    别急，一个一个的来，按时间节奏来触发。如：drap或scroll期间会高频触发回调。

  区别：
    1）节流：限制执行频率，有节奏的执行。节流关注的是过程。让整个过程慢下来。
    2）防抖：限制执行次数，多次密集触发只执行一次。防抖关注的是结果，是当你不抖动了，我要干什么。

  工作中，使用了ladash中的工具方法。

--------------------------------------------------

### px % em rem vw vh有什么区别？

  px:
    像素，绝对单位。

  %：
    相对于父元素的宽度比例

  em:
    相对于当前元素的font-size

  rem:
    相对于根节点的font-size 
    rem主要是用来适配的。不同的手机屏可以设置不同的html的fs。

  vw:
    屏幕宽度的1%   1vw    50vw   100vw

  vh: 
    屏幕高度的1%   1vh    50vh   100vh 
    也可以用来做适配，比rem强大。

--------------------------------------------------
### 箭头函数有什么缺点，什么时候不能使用箭头函数？

  1）没有arguments
  2）无法通过apply call bind改变this
  3）如果多个箭头函数连接，代码难以阅读

什么时候不能使用箭头函数？
  1）对象中的方法
  2）箭头函数不适合new 
  3）箭头函数不适合做原型的方法
  4）事件绑定中的监听器也适合
  5）vue中生命周期和methods选项 
  6）React中是可以使用的

#####   总结：当使用箭头函数时，需要对this敏感起来。

  Vue组件本质就是一个js对象：

```js
   {
      data(){
        return{
          name:"wc"
        }
      },
      methods:{
        getName:()=>{
          return this.name;  // 不能得到的
        }
      },
      mounted:()=>{
        console.log(this.name);   // 不能得到的
      }
    }
```



  React组件本质是一个class:

  ```jsx
  class Hello{
      constructor(name,city){
        this.name = name;
        this.city = city;
      }
      getName = ()=>{
        return this.name;
      }
    }
    let h = new Hello("wc","bj")
    h.getName();
  ```



--------------------------------------------------

### for in 和 for of有什么区别？

  for in 遍历得到的都是key
  for of 遍历得到的都是value

  要想彻底搞懂for of需要学习：
    https://space.bilibili.com/1928471863?spm_id_from=333.337.search-card.all.click

#####   遍历对象：  

​    for in可以   for of不行（因为普通对象不是可迭代对象）

#####   遍历Map Set:

​    for of可以   for in不行

#####   遍历generator:

​    for of可以   for in不行

  for of是用来遍历可迭代对象的。如：数组，字符串，Map，Set，得到value
  for in是用来遍历可枚举的数据的。如：数组，字符串，得到的key

--------------------------------------------------

### for await of 有什么作用？

  用于遍历多个Promise。

--------------------------------------------------

### offsetHieght scrollHeight clientHeight或offsetWidth scrollWidth clientWidth它们之间的区别？

##### scrollTop 和 scrollLeft?

盒子模型：
  width 
  height 
  padding
  border 
  margin 
  box-sizing

offsetHieght/offsetWidth: padding + border + content
clientHeight/clientWidth: padding + content
scrollHeight/scrollWidth: padding + 实际内容尺寸

--------------------------------------------------

##### HEMLCollection 和 NodeList区别？

  DOM是一个棵树，所有的节点都是Node。
  Node是Element的基类。
  Element是其它的HTML元素的基类，如：HTMLDivElement

  HTMLCollection是所有的Element的集合。
  NodeList是所有的Node的集合。

  获取Node和Element的返回结果是不一样的。
  如：ele.childNodes 和 ele.children不一样。
  ele.childNodes里面包含Text和Commnet节点，ele.children不包含。

--------------------------------------------------

### 什么是js的严格模式，严格模式下有哪些特点？

  特点：特点非常多，只需要记住三五个
    1）全局变量必须先声明
    2）禁止with
    3）创建eval作用域
    4）禁止this指向window
    5）严格模式下，形参不能重名
    .... 

--------------------------------------------------

### 什么是options请求，为什么要发options请求？

  跨域：  jd-->tb
    浏览器的同源策略，一般是限制ajax，不能请求其它域的server
    不会限制 link img script iframe... 

    在开发过程中，可以配置代理解决跨域，一个服务器请求另一个服务器是没有跨域问题

  虽然是限制ajax，但是没有限制死，通过后端可以配置cors来允许跨域，配置如下：

  ```js
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
    ctx.set('Access-Control-Allow-Credentials',true)  // 是否允许携带cookie
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,GET,POST,OPTTIONS')
    ctx.set('Access-Control-Max-Age', 60) // 1分钟内不再发options请求
  ```



  options请求，看上去是多余的请求，是在跨域请求之前进行的一个预检查。是浏览器自行发起的，无需我们干预。不会影响项目功能。

--------------------------------------------------

### JS的垃圾回收（内存泄露）？

  之前前端基本上不需要关注内存泄露和垃圾回收，因为不像后端项目7*24小时持续运行。
  现在前端项目越来越复杂了，多多少少还是需要了解一点内存泄露和垃圾回收。

  什么是垃圾回收？
    不再使用内存空间会在合适的时机被释放。

  常见的垃圾回收算法：
    之前：引用计数
    现在：标记清除

##### 以vue为例，垃圾回收（内存泄露）场景？

  1）全局变量或函数，当组件销毁时没有清除，就会造成内存泄露

```js
  {
      data(){
        return{
          arr:[10,20,30]
        }
      },
      mounted(){
        window.arr = this.arr;
        window.printArr = ()=>{
          console.log(this.arr)
        }
      },
      // vue2 beforeDestroy
      beforeDestroy(){
        window.arr = null;
        window.printArr = null;
      }
    }
```



  2）全局事件，定时器，当组件销毁时没有清除，就会造成内存泄露


```js
  {
      data(){
        return{
          arr:[10,20,30]
        }
      },
      methods:{
        fn(){
          console.log("fn...");
        }
      },
      mounted(){
        window.addEventListener("resize",this.fn)
      },
      // vue2 beforeDestroy
      beforeDestroy(){
        window.removeEventListener("resize",this.fn)
      }
    }

{
  data(){
    return{
      arr:[10,20,30],
      intervalId:0
    }
  },
  methods:{
  },
  mounted(){
    this.intervalId = setInterval(()=>{
      console.log(this.arr);
    },100)
  },
  // vue2 beforeDestroy
  beforeDestroy(){
    if(this.intervalId){
      clearInterval(this.intervalId)
    }
  }
}
```



  3）自定义事件，当组件销毁时没有清除，就会造成内存泄露

   ```js
 {
      data(){
        return{
          arr:[10,20,30],
          intervalId:0
        }
      },
      methods:{
        showMsg(){
          console.log("showMsg...");
        }
      },
      mounted(){
        // 自定义事件
        bus.on("eat",this.showMsg)
      },
      // vue2 beforeDestroy
      beforeDestroy(){
        bus.off("eat",this.showMsg)
      }
    }
   ```



### WeakMap和WeakSet:



--------------------------------------------------

### 你项目中通过在beforeDestroy中做什么？

  1）全局变量或函数清空
  2）全局事件需要解绑，定时器也需要清除
  3）自定义事件需要解绑
  beforeDestroy 在这里做一些收尾工作，目的把不需要的内存空间处理成垃圾。
  如果不处理会造成内存泄露。

--------------------------------------------------

### 说一下浏览器的事件环？

  js是单线程的，浏览器中的js执行和dom渲染共用一个线程。
  js如何解决同一时间做多件事？

  答：异步

  写的代码：

1. 同步代码
2. 异步代码：定时器，ajax，promsie.then，async/await，事件绑定....
3. 宏任务：ajax，setTimeout，setInterval，DOM事件监听....
4. 微任务：promies中的then回调，MutaionObserver ...

#####   事件环：

​    1）从代码段开始执行，先执行同步代码
​    2）如果遇到一个宏任务，会把这个任务放到一个宏任务队列，如果遇到一个微任务，就把这个微任务放到微任务任务中。
​    3）当同步代码执行完毕后，先去清空微任务队列。清空微任务队列之后，会渲染页面。
​    4）当微任务队列清空完毕后，从宏任务队列中取出一个宏任务，去执行，在执行过程中，你的宏任务中可能还有同步代码或宏任务或微任务，重复上面的步骤，执行完一个宏任务，肯定要清空微任务队列。

--------------------------------------------------

### node.js事件环：

  现在node的事件环和浏览器的事件环差不多。node中，js也是单线程的，也是需要使用异步的。
  异步任务分两类：（宏任务和微任务分不同的类型，有不同的优先级）
    1）宏任务
      Timers: setTimeout, setInterval
      I/O callbacks: 处理网络，流，TCP的错误的回调
      idls,prepare: 闲置状态，不用管
      poll轮询：执行poll中的IO队列
      check: setImmediate
      close callbacks: 关闭回调，如：soket.on("close")
    2）微任务
      promise.then  async/await  process.nextTick

#####   执行流程：

​    1）先执行同步代码 
​    2）执行微任务（process.nextTick优先级高）
​    3）执行宏任务（每个结束时都执行当前的微任务）

  node的事件环境和浏览器的事件环基本上是一样的。
  只不过node事件环中的宏任务和微任务分类型，有优先级。

  不同版本的node，事件环有差异的。

--------------------------------------------------

### for循环和forEach哪一个快？

  for循环更快一点。因为forEach需要独立的作用域，会有额外的开销。
  forEach的语法更加简洁。

  越“低级”的代码，性能往往是越好的。
  开发时，不光要考虑性能，还需要考虑代码的可读性。

--------------------------------------------------
### 移动端H5，点击页面时，有300ms的延迟，如何解决？

  之所以有300ms的延迟，是一个历史遗留问题。
  在移端H5页面上，双击可以放大网页。对于网页来说：
  有可能是单击，有可能是双击。

  当点击第一下后，怎么判断你是要单击还是双击？
  答：点击第一下，在300ms之内，你又点击了一下，表示双击。
     如果300ms之内，你没有点击，表示单击。

现移动端网页是不需要双击放大的，但是还是存在300ms延迟的。如何解决？
答：1）fastClick  fastClick的原理自行学习。
    2）现代的浏览器，如果设置了视口，会自动解决这个问题。
       

```js
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  当设置了width=device-width，在现代的浏览器中不存在300ms延迟。
```

--------------------------------------------------
### cookie:

  http协议是无状态的，每次请求都会带上cookie，以帮助识别用户身份。
  服务端需要给客户端种植cookie，cookie大小有限制4kb。
  默认情况下，cookie也是有跨域限制的。不可以跨域共享的。withCredentials
  cookie是存储在浏览器中（客户端中）

  localStoreage和SessionStorag中也可以存储cookie。

  现代的浏览器开始禁止第三方cookie。为了保护用户隐私。

### session： 

  数据都是存储在服务器端。
  优点：
    1）用户信息都是存储在服务器端，可快速封禁某个用户
    2）原理简单，易于上手
  缺点：
    1）数据都是存储在服务器端，对服务器的内存要求高。
    2）多个服务器，session不好同步，解决的话，需要使用第三方缓存，redis。

cookie+session实现身份认证：
  cookie是用于登录验证的，存储的是用户标识（userId）
  session在服务端，存储的是用户详细信息，和cookie信息一一对应。
  cookie和session是常见的登录验证解决方案

--------------------------------------------------
### jwt: （json web token）

  1）cookie是http规范，token是自定义传递的
  2）cookie会被浏览器自动存在，token需要自己手动的存储
  3）cookie有跨域不共享，token默认是没有跨域限制

### jwt鉴权流程：

  1）前端发起登录请求，后端验证成功之后，返回一个加密的token
  2）前端需要自行存储token，token中包含用户信息（一般不包含密码等敏感信息）
  3）后面再去请求服务器，会在请求头中带个token，作为用户信息

cookie+session VS jwt(token):
  cookie:HTTP标准，有跨域限制，配合session可以实现身份认证。
  token:无标准，无跨域限制，用于jwt。

  cookie+session： 
    数据都是存储在服务器端。
    优点：
      1）用户信息都是存储在服务器端，可快速封禁某个用户
      2）原理简单，易于上手
    缺点：
      1）数据都是存储在服务器端，对服务器的内存要求高。
      2）多个服务器，session不好同步，解决的话，需要使用第三方缓存，redis。
      3）默认有跨域限制。

###   jwt(token)：

​    优点：
​      1）不占服务端内存空间
​      2）多服务器，不受影响
​      3）不受跨域影响，所以现在开发前后端分离的项目，基本上都jwt实现的鉴权
​    缺点：  
​      1）用户信息都是存储在客户端，无法快速封禁某个用户
​      2）如果服务端密钥泄露了，用户信息可能被盗取

  开发如何选择：
    1）如果有严格管理用户信息的需求（保密，快速封禁），推荐使用cokie+session 
    2）如果没有特殊需求，就使用jwt。

--------------------------------------------------
### 如何实现单点登录？

  什么是单点登录？
    1）注册登录了百度，就意味登录上了百度图片，百度文库，百度新闻...
      www.baidu.com 
      image.baidu.com 
      wenku.baidu.com 
      news.baidu.com 

```tet
  如何实现单点登录呢？
    使用cookie来实现。cookie默认是跨域不共享。但是如果都是xxx.baidu.com，可以设置成共享。
    通过设置cookie中的domain为主域名（baidu.com ），那么xxx.baidu.com都可以共享cookie了。

    使用前提是主域名是一样的。

2）注册登录了淘宝，再去登录支付宝，天猫，闲鱼....
  www.taobao.com 
  www.zhifubao.com 
  www.tianmao.com 
  www.xianyu.com 

  如何实现单点登录呢？
    如果主域名不一样，则cookie不能共享。使用SSO技术方案。

3）OAuth 2.0 
  有很多网站，你可以使用微信登录，QQ登录，支付宝登录。
```

  

##### 总结：

  你知道单点登录了，如何实现单点登录？
  答：1）如果主域名一样，可以基于cookie共享来实现
      2）如果主域名不一样，则需要使用SSO
      3）如果需要接入第三方登录，使用OAuth2.0

--------------------------------------------------

### TCP和UDP有什么区别？

  网络模型：

  HTTP是位于应用层。
  TCP和UDP是位于传输层。

#####   TCP: 

​    要发HTTP请求，需要先建立TCP连接(三次握手)，目的是确保连接建立好。
​    进行通信，数据稳定传输。
​    还需要断开连接（四次挥手），目的是确保数据传输完毕。
​    TCP由于有三次握手和四次挥手，这是一种可靠的传输协议。

#####   UDP：

​    无连接，无断开，不稳定的传输协议，但是效率非常高。
​    可用于视频会议，语音通话。

  HTTP是应用层协议，TCP和UDP是传输层协议。
  TCP是有连接，有断开，稳定传输。
  UDP是无连接，无断开，不稳定传输，但是效率高。

--------------------------------------------------
### HTTP1.0 / HTTP1.1 / HTTP2.0有什么区别？

  1.0是最基础的协议，支持基本get和post语法。

  1.1 
    http缓存策略。 
    支持TCP长连接：Connection:keep-alive，一次TCP连接多次请求。
    断点续传，状态码是206
    支持了新的方法，PUT，DEELTE等，可用于Restful API。 

  2.0 
    可压缩header，减少体积 
    多路复用，一次TCP连接中可以有多个HTTP并行请求
    服务端推送。
    
  还可以使用webscoket来实现

--------------------------------------------------


###   script标签中的defer和async有什么区别？



 无：
    html暂停解析，下载js，执行js，再继续解析html
  defer:
    html继续解析，并行下载js,html解析完再执行js
  async:
    html继续解析，并行下载js,执行js，再继续解析html

--------------------------------------------------
### prefetch 和 preload有什么区别？

```html
  <!-- 还可以这样写 -->
  <!-- preload 资源在当前页面使用，会优先加载 -->
  <link rel="preload" href="xxx.css" as="style">
  <link rel="preload" href="xxx.js" as="script">

  <!--prefetch 资源在未来页面使用，会在空闲时加载 -->
  <link rel="prefetch" href="xxx.js" as="script">
```



  答：preload用到某个资源，会优先加载某个资源
      prefetch还没有用到某个资源，会在空闲时加载这个资源

### dns-prefetch和preconnect有什么区别？

```html
  dns的目的是得到IP地址。
  dns-prefetch：叫DNS预查询
    <link rel="dns-prefetch" href="https://fonts.sfdsf.com/1.css" as="style">

  preconnect: 叫DNS预连接
    <link rel="preconnect" href="https://fonts.sfdsf.com/1.css" as="style">
```



--------------------------------------------------
### webSocket和Http有什么区别？

  webSocket支持端对端通讯，可以由client发起，也可以由server发起。
  用于：消息通知，直播间讨论区，聊天室，协同编辑

  协议：
    ws:// 可实现双端发起请求，没有跨域限制的
    wss:// 类似于https，更加安全的websocket协议。
    发消息：send
    收消息：message事件

  http：
    必须先有请求，才会有响应。

  刚才代码中演示的通信方案，比较原始的，在真实项目中，推荐使用socket.io。更加好的。

--------------------------------------------------
### http长轮询：

  利用http长轮询，也可以模拟出websocket给客户端推送消息。

--------------------------------------------------
### 重绘和重排：

  静态网页：任何时候，任何地点访问时，页面都是一样的。
  动态网页：随时都会重绘和重排
    
  重排： 重新计算尺寸和布局，可能会影响其它元素的位置，如元素高度增加，可能使用相邻元素位置下移了 
    网页动画
    Modal Dialog弹窗
    增加删除一个元素，显示隐藏一个元素

  重绘： 
    元素的外观改变，如颜色，背景色。但是元素的尺寸和位置没有变化，不会影响其它元素的位置。

  重排肯定要引发重绘。重绘不一定会引起重排。重排比重绘影响更大，消耗也更大。所以我们需要避免无意义的重排。

--------------------------------------------------
### 减少重排的方法：

  1）集中修改样式，或使用css中的class。
  2）在修改样式之前，可以先设置display:none，脱离文档流。
  3）使用BFC特性，不影响其它元素的位置。
  4）如果频繁触发，需要做防抖和节流。
  5）使用createDocumentFragment批量操作DOM。
  6）优化动画，使用CSS3和requestAnimationFrame。

--------------------------------------------------
### 什么是BFC，触发BFC的条件有哪些？

  Block Format Context 块级格式化上下文
  如果产生了BFC，内部的元素无论如何改动，都不会影响外面的其它元素的位置。

##### 触发BFC的条件有哪些？

  1）html根标签
  2）float:left/right; 
  3）overflow:auto/scroll/hidden;
  4）display:flex/grid
  5）postion:absolute/fixed

--------------------------------------------------
### 如何实现网页多标签通讯？

  1）webSocket，肯定需要服务端支持，成本高，无跨域限制
  2）localStorage通讯
    A和B选项卡： 
      A页面设置localStorage
      B页面监听localStorage的变化
  3）SharedWorker 兼容性不好，自行了解
    可单独开一个进程，用于同域页面通讯。

--------------------------------------------------
### 网页和iframe如何通讯？

  使用postMessage发消息，监听message事件，获取消息。

--------------------------------------------------







