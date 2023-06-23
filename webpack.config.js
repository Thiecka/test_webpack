// webpack.config.js
//test webpack
const path = require('path');

module.exports = {
  mode: 'development', 
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //test1
  },

  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  // Autres règles et plugins Webpack...


  resolve: {
    fallback: {
      "http": false,
    },
  },
};
