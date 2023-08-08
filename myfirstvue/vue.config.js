const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  configureWebpack:{
    devtool: 'source-map'
  },
  //publicPath: process.env.NODE_ENV === 'production' ? '/myfirstvue/':'/'
})
