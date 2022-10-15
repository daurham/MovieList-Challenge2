const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['js', 'jsx'],
  },
};
