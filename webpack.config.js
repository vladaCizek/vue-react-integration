const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {

  entry: './src/index.jsx',

  output: {
    filename  : 'index.js',
    path      : './output/',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // new VueLoaderPlugin()
  ],

  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      // }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
  node: {
    fs: 'empty'
  },
};