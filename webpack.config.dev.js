const webpack = require('webpack');
const path = require('path');    

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack.plugin');


module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        { 
          loader: 'babel-loader',
        }
      ]
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Three.js playground',
      template: 'src/templates/index.jinja.html',
      showErrors: true,
      minify: false
    }),
    new webpack.SourceMapDevToolPlugin({
        filename: '[name].js.map'
    })
  ],
  devtool: 'source-map',
  devServer: {  // configuration for webpack-dev-server
      contentBase: './build',  //source of static assets
      port: 7700, // port to run dev-server
  } 
};