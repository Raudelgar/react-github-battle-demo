const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] }
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html'
		}),
		new CopyWebpackPlugin([{ from: '_redirects' }])
	],
	mode:
		process.env.NODE_ENV === 'production'
			? process.env.NODE_ENV
			: 'development',
	devServer: {
		historyApiFallback: true
	}
};
