# Guide

> Project for ODC team

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
## ODC-Spider
如果想加入我们，您必须了解以下事情。

## 技术栈
```
基于vue2 + vue-router + ES6 + less来实现此项目，使用webpack打包。
```
## 如何加入我们
```
想要加入我们，您至少熟悉技术栈中的基本内容。
```

##为什么没有做到文件的JS，CSS，HTML完全分离
```
一个重要的事情值得注意，关注点分离不等于文件类型分离。在现代 UI 开发中，我们已经发现相比于把代码库分离成三个大的层次并将其相互交织起来，把它们划分为松散耦合的组件再将其组合起来更合理一些。在一个组件里，其模板、逻辑和样式是内部耦合的，并且把他们搭配在一起实际上使得组件更加内聚且更可维护。
```
### 项目目录说明
```
.
|-- config                           // 项目开发环境配置
|-- src                              // 源码目录
|   |-- components                   // 公共组件
|       |-- business                 // 业务组件
|       |-- common                   // 公共组件
|   |-- router                       // 路由配置和程序的基本信息配置
|   |-- style                        // 全局通用css文件
|   |-- assets                       // 公共图片
|   |-- app.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- test                             // 测试目录
|-- .babelrc                         // ES6语法编译配置
|-- index.html                       // 项目入口
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息
.
```

