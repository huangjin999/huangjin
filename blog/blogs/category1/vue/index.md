---
title: Vue响应式原理之Observer、Dep、Watcher
date: 2023/03/27
tags:
 - vue
categories:
 - vueList
---

## Object.defineProperty

简单来讲的话Vue的响应式原理是通过`Object.defineProperty`实现的。被`Object.defineProperty`绑定过的对象，会变成「**响应式**」化。也就是改变这个对象的时候会触发get和set事件，进而触发一些视图更新。

```js
function defineReactive (obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: () => {
            console.log('我被读取了');
            return val;
        },
        set: newVal => {
            if (val === newVal) {
                return;
            }
            val = newVal;
            console.log("数据被改变了，我要渲染新数据到页面");
        }
    })
}

let data = {
    text: 'vue响应式',
};

// 对data上的text属性进行绑定
defineReactive(data, 'text', data.text);

console.log(data.text); // 控制台输出 <我被读了，我要不要做点什么好?>
data.text = 'hello Vue'; // 控制台输出 <hello Vue && 数据被改变了，我要把新的值渲染到页面上去!>
```

## Observer 「响应式」
Vue中用Observer类来管理上述响应式化Object.defineProperty的过程。
我们可以用如下代码来描述，将this.data也就是我们在Vue代码中定义的data属性全部进行「响应式」绑定。

```js
class Observer {
    constructor() {
        // 响应式绑定数据通过方法
    	observe(this.data);
    }
}

export function observe (data) {
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
       // 将data中我们定义的每个属性进行响应式绑定
       defineReactive(obj, keys[i]);
    }
}
```

## Dep 「依赖管理」

我们通过`defineReactive`方法将`data`中的数据进行响应式后，可以监听到数据的变化了，
- dep==>收集依赖，添加watcher 
- dep==>通知所有的watcher

什么时候收集依赖，添加watcher ?
- 当模板中使用到数据时，收集依赖，模板中使用数据会走getter , 也就是说在getter中收集依赖，添加观察者。

什么时候通知watcher ?
- 当data中的数据变化了，走setter，也就是说在setter中需要通知观察者

```html
<div>
    <p>{{message}}</p>
</div>
```

```js
data: {
    text: 'hello world',
    message: 'hello vue',
}
```

当使用`watch`属性时，也就是开发者自定义的监听某个data中属性的变化。比如监听`message`的变化，`message`变化时我们就要通知到`watch`这个钩子，让它去执行回调函数。

这个时候`message`的`Dep`就收集到了两个依赖，第二个依赖就是用来管理`watch`中`message`变化的。

```js
watch: {
    message: function (val, oldVal) {
        console.log('new: %s, old: %s', val, oldVal)
    },
}        
```

### 如何收集依赖

我们如何知道`data`中的某个属性被使用了，答案就是`Object.defineProperty`，因为读取某个属性就会触发`get`方法。可以将代码进行如下改造：

```js
function defineReactive (obj, key, val) {
    let Dep; // 依赖

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: () => {
            console.log('我被读了，我要不要做点什么好?');
            // 被读取了，将这个依赖收集起来
            Dep.depend(); // 本次新增
            return val;
        },
        set: newVal => {
            if (val === newVal) {
                return;
            }
            val = newVal;
            // 被改变了，通知依赖去更新
            Dep.notify(); // 本次新增
            console.log("数据被改变了，我要把新的值渲染到页面上去!");
        }
    })
}
```

### 什么是依赖

那所谓的依赖究竟是什么呢？上面的图中已经暴露了答案，就是`Watcher`。

## Watcher 「中介」

`Watcher`就是类似中介的角色，比如`message`就有三个中介，当`message`变化，就通知这三个中介，他们就去执行各自需要做的变化。

`Watcher`能够控制自己属于哪个，是`data`中的属性的还是`watch`，或者是`computed`，`Watcher`自己有统一的更新入口，只要你通知它，就会执行对应的更新方法。

因此我们可以推测出，`Watcher`必须要有的2个方法。一个就是通知变化，另一个就是被收集起来到Dep中去。

```javascript
class Watcher {
    addDep() {
        // 我这个Watcher要被塞到Dep里去了~~
    },
    update() {
        // Dep通知我更新呢~~
    }, 
}

```
![如图](/images/01-MVVM（初始化）.jpg)
![如图](/images/02-MVVM（数据更新）.jpg)

