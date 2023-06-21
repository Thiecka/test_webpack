// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', 
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
