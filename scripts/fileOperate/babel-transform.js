/** * Created by lzq on 2017/9/13. * 先如此，之后陆续支持可以转换整个文件 */const babel = require('babel-core');const fse = require('fs-extra');function transformFile (inputFileName,outputFileName) {    babel.transformFile(inputFileName,function(err,result){        console.log(result.code)        fse.outputFile(outputFileName, result.code, err => {            console.log(err)        });    });}module.exports = {    transformFile};