
var path = require('path');
 
module.exports = {
  mode: "development",
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' для webpack 1
    }
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
          },
      ],
  },
};