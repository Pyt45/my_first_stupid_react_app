const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;
// const dev = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.[hash].js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					}, 
					{
						loader: 'css-loader',
						options: {
							modules: true,
							// localsConvention: 'camelCase',
							sourceMap: true
						}
					}
				]
			}
		]
	},
	// 'style-loader', 'css-loader', "sass-loader"
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		})
	],
	devServer: {
		host: 'localhost',
		port: port,
		historyApiFallback: true,
		open: true,
		contentBase: path.join(__dirname, 'public')
	}
};