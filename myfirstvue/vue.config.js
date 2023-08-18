const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  configureWebpack:{
    devtool: 'source-map'
  },
  // 部署应用包时的基本 URL。如：/my-app/，则访问地址http://localhost:8080/my-app/ 
  publicPath: '/',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录的内容在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  outputDir: 'output',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: '',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)
  indexPath: '/'
})
