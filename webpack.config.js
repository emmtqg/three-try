const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')    // removes Invalid configuration object/Options Validation Error

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
      test: /\.js$/ ,
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
    })
  ],
  devServer: {  // configuration for webpack-dev-server
      contentBase: './build',  //source of static assets
      port: 7700, // port to run dev-server
  } 
};