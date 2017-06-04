const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: {
	  webpack: './js/app2.js' 
  },
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'bundle_[name].js'
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'}
    ]
  },
  resolve: {
	modules: ["node_modules"],  
	extensions: [".js"]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  target: "web"
};

module.exports = config;