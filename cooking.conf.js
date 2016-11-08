var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    'index': ['./src/pages/index/index.js'],
    'admin': ['./src/pages/app/main.js'],
    'chart': ['./src/pages/chart/chart.js'],
    'table': ['./src/pages/table/table.js']
  },
  dist: './dist',
  //template: './index.tpl',
  template: {
    'index.html': {
      filename: 'index.html', // 不指定默认使用键名
      template: './index.html',
      chunks: ['index', 'manifest', 'vendor']
    },
    'admin.html': {
      filename: 'admin.html', // 不指定默认使用键名
      template: './admin.html',
      chunks: ['admin', 'manifest', 'vendor']
    },
    'chart.html': {
      filename: 'chart.html', // 不指定默认使用键名
      template: './chart.html',
      chunks: ['chart', 'manifest', 'vendor']
    },
    'table.html': {
      filename: 'table.html', // 不指定默认使用键名
      template: './table.html',
      chunks: ['table', 'manifest', 'vendor']
    }
  },
  devServer: {
    port: 8080,
    publicPath: '/'
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  minimize: true,
  chunk: true, // see https://cookingjs.github.io/zh-cn/configuration.html#chunk
  postcss: [
    // require('...')
  ],
  publicPath: '/dist/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  alias: {
    'src': path.join(__dirname, 'src')
  },
  extends: ['vue', 'lint', 'autoprefixer']
});

module.exports = cooking.resolve();
