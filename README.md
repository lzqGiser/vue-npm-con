# vue-npm-con

> A Vue commpent publish project

# using vue-npm-con, you can build your npm packages library like element-ui of vue

## Build Setup

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080/example
npm run dev

# build for production with minification and complete building the example
npm run build

# publish for production of components
## publish beta version
npm run pubb

## publish latest version
npm run publ

##note: before publish npm packages, you should modify package.json version that comply with semver
```


## 使用方法

#### dev开发模式
> 开发模式下的页面访问和最终组件的example制作公用一个页面；

> 访问页面需要输入example文件下entry下的js文件的名称。例如访问banner组件的页面，需要
输入banner.html
  默认页面会自动打开http://localhost:8080,此时需要在后面添加html文件名称
  例如：http://localhost:8080/banner.html 此时访问的就是banner组件的开发页面；

#### 开发组件需要注意内容

1. 组件文件结构

> 在src目录下，每一个组件都应该独立以一个文件夹的方式出现，其中应该有一个index.js的文件，用来定义组件的入口；

2. 组件路径定义

> 项目根目录下components.json文件，文件定义了组件的路径，其会被webpack.pub.conf.js读取，作为配置entry；因此
在新增组件的时候，要在这里配置组件路径；
