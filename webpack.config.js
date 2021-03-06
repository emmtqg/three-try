const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');    // removed Invalid configuration object
                                // Options Validation Error

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: 'development',
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