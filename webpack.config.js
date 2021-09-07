const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: 
  [
    path.resolve(__dirname,'src','javascripts','index.js'),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
  ],
  devtool: 'inline-source-map',
}