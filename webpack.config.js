/*
    ./webpack.config.js
*/
const path = require('path')
const config = require('config')
const fs = require('fs')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

fs.writeFileSync(path.resolve(__dirname, 'build/client.json'), JSON.stringify(config))

module.exports = {
  entry: './client/main.jsx',
	devtool: "source-map",

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
			//{ test: /\.(png|svg|jpg|gif)$/, use: [ 'file-loader' ] }
    ]
  },

	plugins: [
		HtmlWebpackPluginConfig,
		new CopyWebpackPlugin([
			{ from: './assets', to: './assets' }
		])
	],

	devServer: {
	//	hot:true
	},

	resolve: {
		alias: {
			config: path.resolve(__dirname, 'build/client.json')
		}
	}
}
