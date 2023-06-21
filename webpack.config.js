// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', 
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Autres règles et plugins Webpack...


  resolve: {
    fallback: {
      "http": false,
    },
  },
};
