# vue架构介绍

  1. bulid 项目构建（webpack）相关代码
     * |—— build.js **（生产环境构建代码）**
     * |—— check-versions.js **检查node、npm等版本**
     * |—— utiLs **构建工具相关**
     * |—— vue-loader.conf.js **loader的配置文件**
     * |—— webpack.base.conf.js **webpack基础配置**
     * |—— webpack.dev.conf.js **webpack开发环境配置**
     * |—— webpack.prod.conf.js **wepack生产环境配置**

  2. config 配置目录，包括端口号等。我们初学的可以使用默认的。
      * |—— dev.env.js **开发环境变量**
      * |—— index.js **项目一些配置变量**
      * |—— prod.env.js **生产环境变量**
      * |—— test.env.js **测试环境变量**

  3. node_moudules npm加载的项目依赖模块（依赖的node工具包目录）

  4. src **这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件。**
      * |—— assets:**资源目录**/ 放置一些图片，如logo等。***放置需要经由webpage处理的静态文件，通常为样式类文件，如css,sass以及一些外部的js***
      * |—— components:**组建目录**/ 目录里面放了一个组件文件，可以不用。***公共组件***
      * |—— router **路由配置目录**/  此处配置项目路由
      * |—— APP.vue:**页面级Vue组件**/ 项目入口文件，我们也可以直接将组件写这里，而不适用components目录。***根组件***
      * |—— main.js **页面入口JS文件**/ 项目核心文件。***入口文件***
  5. static 静态资源目录，如图片、字体、json数据等。***放置无需经由webpack处理的静态文件，通常放置图片类资源***

  6. test 初始测试目录，可删除

## .babelrc   Babel转码配置 ES6语法编译配置

## .editorconfig   代码格式

## .eslintignore  （配置）Eslint检查中需忽略的文件（夹）

## .eslintrc.js  Eslint配置

## .gitignore (配置)在项目中需要被Git忽略文件（夹）

## postcssrc.js 添加浏览器私缀

## index.html 主页，打开网页后最先访问的页面

## package-lock.json 记录当前状态下实际安装的各个npm package的具体来源和版本号

## package.json 本项目配置信息，启动方式

## README.md 项目说明（很重要，便于其他人看懂）

## REDEME.md 项目的说明文件
