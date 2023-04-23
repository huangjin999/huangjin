---
title: Vue八股文分享
date: 2023/03/28
password: 268fa8ddcb20cb9c9d6b205774e45c32
---
### 如何理解vue

- 1）有十几个指令，都是内置的
- 2）组件化（props,computed,watch,template,data,methods,组件注册...）
- 3）组件通信（9种通信方案）
- 4）复用技巧（自定义组件，混入，过滤器，自定义指令，原型链，插件）
- 5）五个内置组件（slot,transition,component,keep-alive）
- 6）底层原理：响应式，生命周期，API原理

------

### vue的特点：

- 1）MVVM框架
- 2）数据是响应式的
- 3）组件化
- 4）丰富的指令（DOM操作的封装）
- 5）丰富的API（选项式API和组合式API）
- 6）Vue的生态丰富
- 7）Vue的文档非常好
- 8）渐进式，可大可小的项目都可以做

------

### Vue的开发思想：

- 在交互事件中，要改变视图，不需要操作DOM，先在data声明一个状态，
- 在交互事件中，只需要改变状态，状态变了，视图会自动刷新。
- 就是间接操作DOM方式。

------

### 指令：

- 指令都是对DOM操作的封装，指令也是操作DOM的，可以让我们更加合理地操作DOM。

**分类：**
- 文本相关
- 属性绑定相关
- 事件绑定相关
- 表单相关
- 列表渲染相关
- 条件渲染相关
- 其它指令
- 自定义指令

#### 文本相关：

- v-text   在大多数情况下，可以和{{}}互换
- {{}}  缺点：{{}} 一闪而过，解决：v-cloak解决  或  使用v-text 
- v-once   只绑定第一次，后面数据变了，不再更新了，一般情况下和{{}}一块用 
- v-html  如果绑定的是html字符串，会解析html字符串。默认已做了"防注入攻击XSS"处理


#### 事件绑定相关:

- v-on指令  给视图模板上绑定各种JS事件   click  mouseenter  blur   keyup...
- v-on:click   @click.事件修饰符 = "事件处理器" 
- 修饰符： .stop    .provent    .enter...  

------

#### 表单绑定：

- v-model 表单双向绑定  input select textarea... 
- 格式: <input v-model.修饰符="msg"/>
- .trim  自动去除文本的首尾空格
- .number 隐式类型转化成number类型
- .lazy  把input事件转成change事件，用于性能，当表单失去焦点再进行双向绑定
- v-model也可以写在组件上，在vue2和vue3中就不一样的：
-   vue2:
-   vue3:

------

#### 列表渲染相关:

  语法： 
    <div v-for="(item,index) in array"></div>
    <div v-for="(value,key,index) in obj"></div>
    <div v-for="(num,index) in 5"></div>

  使用v-for为什么要加key，key有什么作用？ 

------

#### 条件渲染相关:

  v-show 
    背后使用的是dispaly:none / 原本的显示模式

```
<span v-show='xx'>    span dispaly:none  /   inline

通过控制样式的达到显示和隐藏，性能开销就小了。
```

  v-if   v-else-if    v-else  
    背后是控制节点的创建或销毁。如果频繁使用v-if，会导致频繁地创建和销毁dom元素
    这样性能开销就大了。

  v-if和v-for在vue2中不要连用：
    在vue2中v-for的优先级更高，不管条件是否成立，都要v-for出来。

------

#### 其它指令：

  v-slot 
  v-pre  基本上项目中不用，可以阻止编译器对指令的编译

------

#### 自定义指令:

  Vue.directive   全局的自定义指令

  directtives选项   局部的

------

### 指令相关面试题

#### 常用的vue指令都有哪些？ 你怎么理解指令？

- 文本相关
- 属性绑定相关
- 事件绑定相关
- 表单相关
- 列表渲染相关
- 条件渲染相关
- 其它指令
- 自定义指令
  <!-- 以上均是指令 -->

#### v-if和v-show有什么区别？

#### 如何解决{{}}，一闪而过问题？

1.使用v-cloak
2.使用v-text

 <h2 v-cloak>{{name}}</h2>
 <h2 v-text="name"></h2>

#### v-for循环哪些数据类型？ v-for列表渲染时，为什么要加key?

1.循环数组
2.循环对象
3.循环数字

#### v-model都有哪些修饰符？

v-model.lazy="name"
此时v-model变成了 @input @change的语法糖
.number   转为数字类型   .trim 去除空格     修饰符可以连用

#### vue中如何阻止事件冒泡？如何阻止默认事件？如何监听键盘enter按键？

.stop 阻止事件冒泡使用 
.prevent 阻止默认事件
@keyup.enter：监听键盘回车事件

#### 封装过哪些自定义指令？

  https://juejin.cn/post/6906028995133833230

------

{{}}   v-text="xxxx"

### 计算属性：

  语法：computed选项，在这个选项中就可以定义计算属性。根据已有状态，计算出一个新的状态。
  作用：
    1）当指令的表达式比较复杂时,建议使用计算属性来优化表达式。这样可以提高模板代码的可读性，可维护性。
    2）缓存一个复杂的运算，类似于React中的useMemo。计算属性的本质就是一个函数，可以依赖一些状态，当依赖的状态发生了变化，计算属性会重新计算。

#### 计算属性能不能绑定到v-model上？

可以  因为v-model需要修改数据，计算属性不只有get，还有set，修改数据就走set。

#### 在vue中，计算属性可以计算哪些性质的数据？

计算data中的数据，vuex中的数据，$route等。

#### 计算属性有什么作用?

两大作用。

#### 你是怎么理解计算属性的缓存功能的？

当一个复杂的计算依赖的数据发生变化的时候，才会重新计算。如果依赖的数据没有发生变化，就会走缓存。

------

#### 侦听器：

  作用：侦听数据的变化，如果数据变化了，去做另一件事。
  特点：
    侦听一个引用类型的数据时，默认只能侦听第一层数据。
    侦听的层级越深，Vue背后要做的事情越多的，也是一种性能损耗。
    就要深度侦听，配置deep:true。
    一般情况下，不要对一个引用类型的数据进行深度侦听。
    info:{a:{b:{c:100}}}

```
watch：{
  info:{deep:true}
}  最好不要这样做

watch:{
  info.a.b.c:{ }
} 最好这样做 
```

#### 在vue中，你可以对哪些数据进行侦听？

可以对data,计算属性，vuex中的数据，$route都可以侦听。
   凡是带有__ob__的数据都是可以侦听。

#### 什么是侦听器？有什么作用？

侦听器能不能侦听数组或对象的变化？
可以，但是默认是不深度侦听的，如果想深度侦听，需要配置deep:true 

#### 为什么侦听器默认不支持深度侦听？

性能优化。侦听的层级起深，vue背后做的事情越多，性能损耗越大。

#### 如果确实想侦听某个对象中的某个属性的变化？

推荐  "obj.key"  最好不要侦听obj

#### 侦听器可以侦听哪些数据的变化？

data, computed,vuex,$route.. 

------

### 你是如何理解组件化的？

  1）组件化技术是对html技术的扩展，使用粒度较小的html标签封装成粒度更大的标签（组件）。
  2）组件化是前端所有的框架中最重要的技术之一，可以快速开发，代码复用，提高可维护性。
  3）在vue2中，一个组件，可以理解成一堆选项的组合。在封装组件是时，可以使用大部分的vue选项，如：data, templte,methods.... 
  4）组件封装完后，必须注册（局部注册和全局注册），注册时，如果是多个单词，需要使用中划连接，如：el-button  van-button 
  5）对一个组件来说，最重要的是模板（template），在模板中就可以使用vue帮我们封装的各种各样的指令。
  6）对一个组件来说，可以props，接收父传递给子组件的数据。接收到后，就可以在模板中使用数据。
  7）对一个组件来说，可以使用this.$emit()，触发一个自定义事件，并且可以把数据传递给父组件。
  ... 

#### 组件中有一个data选项，为什么这个data选项必须是一个函数呢？

组件是可以复用的，如果不是函数，多次复用时，复用的是同一个地址，指向同一个堆，一个组件动了数据，别一个组件也受到影响了。
    如果是函数，它内部会自动去调用这个函数，函数返回一个堆，每次复用，都是同一个堆。

#### 组件的三大技术：

  1）自定义属性：  <van-button :num="1" count="2"></van-button>
  2）自定义事件：  <van-button @abc=""  @click=""  @change=""></van-button>
  3）自定义插槽：  <van-button><div>xxxx</div></van-button>
  组件封装：封装任何一个组件，基本上都要用到自定义属性，自定义事件，自定义插槽。

#### 组件注册：

  全局注册：Vue.component("van-butto",{})   全局注册后，在任何组件中都可以使用了。
  局部注册：components选项  components:{ "vant-button" }， 局部注册只能在当前组件中使用。

#### 组件间的通信：

  一个项目中，一堆组件会形成组件树。我们说的通过就是这树上的节点间的通信。
  1）父子组件   
    父传子：自定义属性 + props
    子传父：自定义事件 + $emit()
  2）兄弟通信
  3）祖先与后代
  ... 

### 组件面试题：

#### 什么是组件化，你是如何理解组件的？

现在主流的开发框，都是基于组件化的，组件的作用就是为了实现UI和逻辑的复用，在vue组件中，提供了很多的选项，如data,computed,watch,method,components,filter... 可以方便我们实现业务逻辑，
组件化的好处就是可以复用UI和逻辑，在业务开发中，一般都会合理的划分组件，在vue中组件化的核心就是自定义属性，自定义事件，自定义插槽。
组件与组件通信常见的有8种方案，比如：... 展开讲   如果看过源码，可以从源码角度分析组件的实现过程。

#### 项目中封装过哪些组件？ 

 vue-element-admin  这个项目中就封装了非常多的优秀的组件。

 element 二次封装

#### vue中父子之间如何通信? 父传子   子传父 

**父传子**

对于自定义属性传值的时候 父传子的时候

可以传递函数 这个函数可以用来修改父级中的数据

  :money='money'  第一个money指自定义事件 第二个指data层的数据变量名

子组件要想接收父组件传递过来的数据 需要使用props进行接收 props是数组

**$attrs也可以接受组件**

props和$attrs的区别

​    1.都是配合自定义属性

​    2.props是选择性接收 $attrs则是全部接收

**子传父** 

在使用子组件的位置绑定自定义事件 <son @go="handle"></son>

父组件在使用子组件的时候 传了一个自定义事件
 现在子级去触发这个自定义事件
通过$emit触发
this.$emit(触发的事件名,参数)

#### 什么是插槽，什么是具体名插槽，什么是作用域插槽。

#### 为什么组件中的data必须是一个函数？

组件是可以复用的，如果是一个对象，多个组件实例的data指向同一个堆空间，数据就是相互影响。

#### 在vue2中，new Vue({data:{}}) 为什么这个data可以是一个对象？

因为这个vm只有一个，不会复用。所以说它可以是一个对象。

#### 组件封装的三大技术：

1）自定义属性 
2）自定义事件 
3）自定义插槽  


------

#### v-model:

  在vue2中：
    写在标签上：
      input  
        text  ===>   :value + @input 
        radio  ====>  :checked + @change 
        checkbox ====>   xxxx....  
      select 
        :selected + @change 
      textarea
        :value + @input
    写组件上：
      :value + @input 

  在vue3中：
    xxxxx

### vue组件的生命周期： 描述一个组件从生到死的过程。

  1）创建阶段：beforeCreate  created
  2）挂载阶段: beforeMount   mounted
  3）更新阶段: beforeUpdate   updated
  4）销毁阶段: beforeDestrory   destroyed
  5）和动态组件相关的： activated(激活)   deactiveated(休眠)
  6）和异常捕获相关的： errorCaptured 

------

### Vue常用的生命周期有哪些？

### 在创建/挂载/更新/销毁阶段，Vue在背后分别做了些什么事儿？

### 响应式原理，发生在Vue哪些生命周期阶段？ 那你说一下响应式原理？

### 虚拟DOM，在哪些阶段生成的？

### 哪些生命周期钩子可以执行多次？哪些执行一次？

### 什么虚拟DOM？（是一个很大的JSON数据，用于描述视图模板的，保存在内存中）

### 虚拟DOM存在的价值点在哪里？（更新，把DOM更新粒度降到最低，规避人为DOM滥操作）

### 什么diff运算？（在更新阶段，patch对新旧虚拟DOM进行对比，找出脏节点，提交更新）

### 谈一谈你对 MVVM、MVC、MVP的理解？

###   1）vue3相比vue2有什么优势？
###   2）vue3的生命周期？
###   3）你是如何看待选项式API和组合式API？
###   4）你是如何理解 ref toRef toRefs reactive?
###   5）vue3升级了哪些重要的功能？
###   6）vue3如何实现逻辑代码的复用？
###   7）vue3如何实现响应式？
###   8）watch和watchEffect的区别？
###   9）在setup中，如何获取组件实例？
###   10）vue3为什么比vue2快？
###   11）vie是什么，为什么比较快？
###   12）vue3中的组合式api和raect中的hooks对比？

------

### MVVM

MVVM：  
  M：数据层   VM层   V：视图层

M+V可以组装：
  MVC   MVP   MVVM

M+V在哪里组装： 
  前后端分离，前后端不分离，SSR服务器渲染

后端组装：
  MVC：  Controller  控制器

------

### 动态组件：

  动态组件一般是配合keep-alive来使用，keep-alive是vue内置的组件，它可以让组件不被销毁，说白了，就是对组件进行一种缓存。

  关于动态组件还有两个钩子函数：activated, deactiveated 

### activated 和 mounted有什么区别？

   activated是动态组件相关的钩子，mounted我们写的组件都有mounted钩子函数。
   activated执行多次，mounted只会执行一次
   activatedg表示组件被激活了，mounted表示组件挂载完毕。

### deactiveated  和  beforeDestrory有什么区别？


### v-if 和 v-show 的区别

​    v-if是控制真正的渲染或销毁，而不是显示与隐藏
​    v-show通过css display来控制显示与隐藏
​    频繁切换显示状态用v-show，否则使用v-if

##### 为何 v-for 中要用 key

​    diff算法中通过tag和key来判断是否是sameNode.
​    updateChildren中有了key，可以减少渲染次数，提升渲染性能。可以尽可能复用vnode
​    key，不能是index和random。一般都是以id作为key。

  描述 vue 组件生命周期（以及有父子组件，两者的生命周期）
    1）单个组件的生命周期（那个图，你能不能画出来，能不能说出来）
    2）父子组件嵌套的生命周期（也是一个面试题）

### 组件间如何通讯

​    1）9大组件通信方案

  组件初次渲染和更新的过程
    初次渲染：
      第一步：解析模板为render函数
      第二步：触发响应式，监听data中的属性，getter和setter
      第三步：执行render函数，生成vnode， 进而进行patch(elem,vnode)
        A）这一步会触发data getter，在getter中进行依赖收集（把数据“观察”起来）。
          注意：不一定是所有的数据都会被观察。是否被观察取决于模板中是否使用。
      第四步：把vnode转化成真实DOM，渲染到页面上。
    更新过程：
       第一步：修改数据，会触发data setter
       第二步：重新执行render函数，生成新的vnode（newVnode）
       第三步：进行patch(vnode,newVnode),patch的过程就是diff的过程

```js
 https://v2.cn.vuejs.org/v2/guide/reactivity.html
```



   

### 双向数据绑定 v-model 的原理

​    type="text"  :value+@input
​    xxx 
​    写在组件上：
​      vue2:xxx
​      vue3:xxx

### 说一下对 MVVM 的理解

​    官网有图：

```txt
 https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=mvvm&step_word=&hs=0&pn=1&spn=0&di=7189064908862914561&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=673888355%2C3365485600&os=383766179%2C1059975381&simid=673888355%2C3365485600&adpicid=0&lpn=0&ln=1197&fr=&fmq=1679387608751_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=https%3A%2F%2Fimg.jbzj.deiniu.com%2Ffile_images%2Farticle%2F201804%2F2018418101120793.jpg%3F2018318101136&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B1jtgt7_z%26e3Bv54AzdH3Fw6ptvsjAzdH3F8nbn00_z%26e3Bip4&gsm=1e&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined&dyTabStr=MCwzLDEsNiw0LDUsMiw3LDgsOQ%3D%3D 
```



### computed 和 method 的区别？

​    特点：
​      1）提高性能，根据已有状态计算出新的状态，当依赖的状态发生了变化，会重新计算。有缓存功能。

### 为何组件 data 必须是一个函数？

​    组件是可以复用，如果data是一个对象，多个组件实例中的data指向同一个堆空间。

### ajax 请求应该放在哪个生命周期？

​    mounted   js是单线程，ajax是异步获取数据，阻塞不了生命周期往下执行。
​    放在created里面，也快不了多少时间。

### 如何将组件的所有 props 传递给子组件？

```js
$props
    Layout.vue
     <User v-bind="$props" />
```



### 如何自己实现一个 v-model ？

​    v-model的原理

### 多组件有相同的逻辑，如何抽离？

​    mixin
​    mixin的一些缺点

### 何时需要使用异步组件？

​    加载大组件
​    路由中异步加载

### 何时需要使用 keep-alive

​    缓存组件，不需要重复渲染
​    如多个静态tab页切换。
​    优化性能。

### 何时需要使用 beforeDestroy ？

​    清除定时器
​    解绑自定义事件  $off  
​    解决原生DOM事件   scroll

### 什么是作用域插槽？为何需要它?

​    它也是组件通信一种方案，使用作用域插槽实现子传父

##### vuex 的 action 和 mutation 有何区别？

​    action中可以处理异步逻辑，mutaino是改变状态的唯一途经。
​    mutation是原子操作。
​    action还可以整合多个mutation

##### vue-router 路由模式有几种？

 三种 "hash" | "history" | "abstract" 
    hash最简单，推荐使用
    history 需要后端支持，否则会造成404

  如何配置 vue-router 异步加载？

```js
    {
      path:"/home",
      component:()=>import("../component/Home.vue")
    }
```



### 场景题：用虚拟 DOM 描述一个 html 结构

​    

### vue 如何监听 data 变化？

​    Object.defineProperty
​    递归深度监听，对数组的方法需要特殊处理。重写那7人方法。
​    有什么缺点？

### vue 如何监听数组变化

​    重新定义原型，重写push,pop等方法，实现监听。
​    Proxy可以原生支持监听数组变化  Vue3中使用了Proxy。

### 响应式原理

​    监听data的变化
​    模板编译
​    初次渲染
​    更新流程
​    异步渲染

###  diff算法过程

​    h  vnode
​    path(elem,vnode) / path(vnode,newVnode)
​    pathVnode, addVnodes, removeVnodes
​    updateChildren  key重要性 

### diff 算法时间复杂度是多少

​    O(n)

### vue 为何是异步渲染？

​    合并data的修改，异步渲染，提高渲染性能
​    $nextTick()

### nextTick 有何作用？

​    在DOM更新完之后，自动调用回调。

### vue-router 如何监听路由变化？

​      watch $route

### vue 性能优化 （开发环境编译模板）

​- 1）合理使用v-show和v-if
​- 2）合理使用computed
​- 3）v-for加上key, 在vue2中避免和v-if连用。
​- 4）自定义事件，DOM事件及时销毁。
​- 5）合理使用异步组件。
​- 6）合理使用keeplalive
​- 7）data层级不要太深
​- 8）webpack层面的优化（后面复习webpack, webpack4）
​- 9）前端通用的性能优化方案，如图片懒加载... 
​- 10）使用SSR


