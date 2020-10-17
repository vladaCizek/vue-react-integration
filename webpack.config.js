const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  entry: './src/index.jsx',

  devServer: {
    contentBase: __dirname + "/public/",
    compress: true,
    port: 9000,
    publicPath: '/'
  },

  output: {
    filename  : 'index.js',
    path      : path.resolve(__dirname, 'output'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ],

  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
};