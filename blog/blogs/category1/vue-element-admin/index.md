---
title: 开源项目
date: 2023/03/27
tags:
 - 开源项目
categories:
 - 开源项目
---
## vue-element-admin 
- 首次克隆需要做以下操作

#### 插件更名
- 首先将package.json中的tui-editor那一行修改为"@toast-ui/editor": "^3.1.3",
------------------------------------------------------

#### 文件更名
- 进入\src\components\MarkdownEditor\index.vue文件，将他的所有import删除换成下面四行
  
  ```js
   import 'codemirror/lib/codemirror.css'
   import '@toast-ui/editor/dist/toastui-editor.css'
   import Editor from '@toast-ui/editor'
   import defaultOptions from './default-options'
  ```
  
  
#### 方法更名
- 把该页面（还是第二步中的文件）的getValue和setValue分别换成getMarkdown和setMarkdown
- 把页面中的所有tui-editor全部替换为@toast-ui/editor
------------------------------------------------------
#### 重新安装
- 重新执行npm install安装依赖就解决了。

开源地址：[花裤衩](https://github.com/PanJiaChen/vue-element-admin)

