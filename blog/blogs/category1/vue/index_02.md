---
title: 手写minivue
date: 2023/03/27
tags:
 - vue
categories:
 - vueList
---

## 1.发布订阅模式

```js
<script>
  class EventBus {
    constructor() {
      // subs = {eat:[fn1,fn2],失恋：[fn1,fn2]}
      this.subs = {};
    }
    $on(eventType, fn) {
      if (!this.subs[eventType]) {
        this.subs[eventType] = [];
      }
      this.subs[eventType].push(fn)
    }
    $emit(eventType) {
      if (this.subs[eventType]) {
        this.subs[eventType].forEach(fn => {
          fn();
        })
      }
    }
  }

  // 事件总线（发布订阅）
  // {eat:[fn1,fn2]}  {失恋：[fn1,fn2]}
  let eb = new EventBus();
  // 订阅是可以订阅多次的
  eb.$on("eat", () => {
    console.log("eat事件发生了1~");
  })
  eb.$on("eat", () => {
    console.log("eat事件发生了2~");
  })
  // 发布
  eb.$emit("eat");

  // ----------------------------- 
  // 订阅
  eb.$on("失恋", () => {
    console.log("喝酒~");
  })
  eb.$on("失恋", () => {
    console.log("睡觉~");
  })
  eb.$emit("失恋")

</script>
```

## 2.观察者模式

```js

<script>
  // 观察者模式是基于发布订阅的
  // 观察者模式有两个角色：1）发布者  2）订阅者

  // 发布者
  class Dep{
    constructor(){
      // 发布者中有一个容器，记录所有的订阅者
      // 一个发布者中包含了N个订阅者,订阅者也可以叫观察者
      // 在发布者中有两个方法
      //  一个叫addSub,用来把一个订阅者添加到subs
      //  一个叫notify,用来通知每一个订阅者执行update方法
      this.subs = [];
    }
    // 添加订阅者
    addSub(sub){
      // 把sub添加到subs之前，判断一下订阅者是否合格
      // 所谓的合格，就是你里面有一个update
      if(sub && sub.update){
        this.subs.push(sub)
      }
    }
    // 通过所有的订阅者 
    notify(){
      this.subs.forEach(sub=>{
        sub.update(); // 调用订阅者的update方法
      })
    }
  }

  // 订阅者
  class Watcher{
    // update方法，就是用来更新视图的~
    update(){
      console.log("更新视图~");
    }
  }

  let dep = new Dep();
  let watcher = new Watcher();
  dep.addSub(watcher);
  dep.notify(); // 通知订阅者
</script>
```

## 3.数据代理的实现原理

下面是使用自己模拟的vue和尤雨溪的分别演示

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <!-- 自己模拟的vue数据代理 -->
  <script src="./myvue.js"></script>
  <!-- 尤雨溪的vue -->
  <!-- <script src="./lib/vue.2.7.14.js"></script> -->
</head>

<body>
  <div id="app"></div>
  <script>
    let vm = new Vue({
      el: "#app",
      data: {
        msg: "hello vue",
        count: 18,
        scores: [10, 20, 30]
      }
    });
  </script>
</body>

</html>
```

自己的模拟：

```js

class Vue {
  constructor(options) {
    // console.log("options:", options);
    // this表示vm
    this.$options = options || {};
    this.$data = options.data || {};
    this.$el = document.querySelector(options.el)

    // 把$data中的数据挂载到vm上，处理成响应式
    this._proxyData(this.$data)
  }
  _proxyData(data) {
    // console.log(Object.keys(data));
    Object.keys(data).forEach(key => {
      // console.log("key:", key);
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          console.log("get...");
          return data[key];
        },
        set(newValue) {
          if (newValue == data[key]) {
            return;
          }
          console.log("set...");
          data[key] = newValue;
        }
      })
    })
  }
}

```

## 4.把data中的数据处理成响应式

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="./observer.js"></script>
  <script src="./myvue.js"></script>
  <!-- <script src="./lib/vue.2.7.14.js"></script> -->
</head>

<body>
  <div id="app"></div>
  <script>
    let vm = new Vue({
      el: "#app",
      data: {
        msg: "hello vue",
        count: 18,
        scores: [10, 20, 30]
      }
    });
  </script>
</body>

</html>
```

接着数据代理的myvue文件继续创建响应式文件

```js

class Observer {
  constructor(data) {
    // console.log("data:", data);
    this.walk(data)
  }
  walk(data) {
    if (!data || typeof data !== "object") {
      return;  // 如果遍历的是一个基本数据类型，结束递归了
    }

    Object.keys(data).forEach(key => {
      // console.log("key:", key);
      this.defineReactive(data, key, data[key])
    })
  }
  defineReactive(obj, key, val) {
    let that = this;
    this.walk(val)

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        console.log("get...");
        return val;
      },
      set(newVal) {
        if (newVal === val) {
          return
        }
        console.log("set...");
        val = newVal;

        // newVal是新值，也可能是一个对象，也需要处理成响应式
        that.walk(newVal)
      }
    })
  }
}
```

## 5.模板编译

```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="./compiler.js"></script>
  <script src="./observer.js"></script>
  <script src="./myvue.js"></script>
  <!-- <script src="./lib/vue.2.7.14.js"></script> -->
</head>

<body>
  <div id="app">
    <h1>小胡子的使用</h1>
    <h2>{{msg}}</h2>
    <h2>{{count}}</h2>
    <hr>
    <h1>v-text的使用</h1>
    <h2 v-text="msg" class="box"></h2>
    <hr>
    <h1>v-model的使用</h1>
    <input type="text" v-model="msg">
    <input type="text" v-model="count">
  </div>
  <script>
    let vm = new Vue({
      el: "#app",
      data: {
        msg: "hello vue",
        count: 18,
        scores: [10, 20, 30]
      }
    });
  </script>
</body>

</html>
```

接着继续实现

```js


class Compiler {
  constructor(vm) {
    // console.log(vm.$el);
    this.el = vm.$el;
    this.vm = vm;
    this.compile(this.el);
  }
  compile(el) {
    // console.log(el.childNodes);
    // console.log(Array.isArray(el.childNodes));

    Array.from(el.childNodes).forEach(node => {
      // console.log("node:", node);

      if (this.isTextNode(node)) {
        // 文本节点
        this.compileText(node)
      } else if (this.isElementNode(node)) {
        // console.log(node);
        this.compileElement(node);
      }
      if (node.childNodes && node.childNodes.length > 0) {
        // 有孩子
        // console.log(node + "节点有孩子");
        this.compile(node)
      }
    })
  }
  // 编译元素节点
  compileElement(node) {
    Array.from(node.attributes).forEach(attr => {
      let attrName = attr.name;
      if (this.isDirective(attrName)) {
        attrName = attrName.substr(2)
        // console.log(attrName);
        let key = attr.value;
        // node是节点  key是数据的值  attrName是属性名
        // v-text = "msg"   key是msg  attrName是text
        this.update(node, key, attrName)
      }
    })
  }
  update(node, key, attrName) {
    // 在模板中可能有很多的指令
    // 编译不同的指令，需要写不同的方法
    // 编译text指令   调用textUpdater
    // 编译model指令   调用modelUpdater
    let updateFn = this[attrName + "Updater"]
    updateFn && updateFn(node, this.vm[key])
  }
  // 处理v-text指令
  textUpdater(node, value) {
    node.textContent = value;
  }
  // 处理v-model指令
  modelUpdater(node, value) {
    node.value = value;
  }
  // 编译文本节点
  compileText(node) {
    let reg = /\{\{(.+)\}\}/;
    let value = node.textContent;
    if (reg.test(value)) {
      let key = RegExp.$1.trim();
      node.textContent = value.replace(reg, this.vm[key])
    }
  }
  // 判断一个节点是否是文本节节点
  isTextNode(node) {
    return node.nodeType === 3;
  }
  // 判断一个节点是否是元素节点
  isElementNode(node) {
    return node.nodeType === 1;
  }
  // 判断一个属性节点是否是一个指令
  isDirective(attrName) {
    return attrName.startsWith("v-")
  }
}
```

## 6.创建Dep发布者 

```js
// dep:
//   1）收集依赖，添加watcher
//   2）通知所有的watcher

// 什么时候收集依赖，添加watcher：
//    当模板中使用到数据时，收集依赖，模板中使用数据会走getter
//    也就是说在getter中收集依赖，添加观察者
// 什么时候通知watcher
//    当data中的数据变化了，走setter，也就是说在setter中需要通知观察者

class Dep{
  constructor() {
    // subs存储所有的观察者
    this.subs = [];
  }
  // 添加观察者
  addSub(sub) {
    if (sub && sub.update) {
      this.subs.push(sub)
    }
  }
  // 通知观察者
  notify() {
    this.subs.forEach(sub => {
      sub.update(); // 执行update就可以更新视图
    })
  }
}
```

## 07-创建Watcher观察者

```js

class Watcher{
  constructor(vm,key,cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;

    Dep.target = this;
    // vm[key] 得到值旧  hello vue
    this.oldValue = vm[key];
    Dep.target = null;
  }
  // 核心：更新视图
  update() {
    let newValue = this.vm[this.key];
    if (newValue == this.oldValue) {
      return; // 新值和旧值一样，不需要更新视图
    }
    this.cb(newValue)
  }
}
```

运行实现

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Document</title>
    <!-- dep发布者 -->
  <script src="./dep.js"></script>
    <!-- watcher观察者 -->
  <script src="./watcher.js"></script>
    <!-- 模板编译 -->
  <script src="./compiler.js"></script>
    <!-- 把data数据处理响应式 -->
  <script src="./observer.js"></script>
  <script src="./myvue.js"></script>
  <!-- <script src="./lib/vue.2.7.14.js"></script> -->
</head>

<body>
  <div id="app">
    <h1>小胡子的使用</h1>
    <h2>{{msg}}</h2>
    <h2>{{count}}</h2>
    <hr>
    <h1>v-text的使用</h1>
    <h2 v-text="msg" class="box"></h2>
    <hr>
    <h1>v-model的使用</h1>
    <input type="text" v-model="msg">
    <input type="text" v-model="count">
  </div>
  <script>
    let vm = new Vue({
      el: "#app",
      data: {
        msg: "hello vue", // Dep subs[w]
        count: 18,  // Dep sub[w]
        // scores: [10, 20, 30]
      }
    });
  </script>
</body>

</html>
```

MVVM（初始化） ![如图](/images/01-MVVM（初始化）.jpg)


MVVM（数据更新）![如图](/images/02-MVVM（数据更新）.jpg)