const path = require('path');

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
