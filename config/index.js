/** * Created by lzq on 2017/8/24. */const path = require('path');module.exports = {    build: {  // build配置        env: require('./prod.env'),  // 指定生产环境        //index: path.resolve(__dirname, '../build/build/example/index.html') ,        assetsRoot: path.resolve(__dirname, '../build'),  // build目录        productionRoot:path.resolve(__dirname, '..'),  // __dirname 定位到config        productionSourceMap: true,        assetsSubDirectory: '',        assetsPublicPath: '/',  // 发布路径        assetsStatic: 'static',  // 静态资源        assetsExpRoot: path.resolve(__dirname, '../build/build/example'),        outputIndex: path.join(__dirname,'../build/index.js'),        inputIndex: path.join(__dirname,'../src/index.js')   //path.join(__dirname,'../../build/index.js')    },    dev: {  // 开发环境配置        env: require('./dev.env'),  // 开发配置文件        port:8080,        autoOpenBrowser:true,        assetsSubDirectory: '',  // 原版static        assetsPublicPath: '/',  // 根目录 /        cssSourceMap: false    }}