// CommonJS 模块化
var htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {

	entry: {
		main: './src/script/main.js',
		easytabs: './src/script/jquery.easytabs.min.js',
		hashchange: './src/script/jquery.hashchange.min.js'
	},

	output: {
		path: path.resolve(__dirname),
		filename: 'dist/js/[name].bundle.js'
	},

	module: {
		loaders: [
		  {
		  	test: /\.js$/,
		  	loader: 'babel-loader',
		  	exclude: path.resolve(__dirname, 'node_modules'), //absolute path
		  	include: path.resolve('./src')
		  },
		  {
		  	test: /\.html$/,
		  	loader: 'html-loader'
		  },
		  {
		  	test: /\.css$/,
		  	loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
		  	// loaders: ['style-loader',
		  	//           'css-loader',
		  	//           'postcss-loader'
		  	//           ]
		  },
		  {
		  	test: /\.less$/,
		  	loader: 'style-loader!css-loader!postcss-loader!less-loader'
		  },
		  // {
		  // 	test: /\.scss$/,
		  // 	loader: 'style-loader!css-loader!postcss-loader!sass-loader'
		  // }
		  {
		  	test:/\.(png|jpg|gif|svg)$/i,
		  	loaders: [
		  	  'url-loader?limit=10000&name=dist/assets/[name].[ext]'
		  	  // {
		  	  // 	loader: 'image-webpack-loader'
		  	  // }
		  	]
		  }
		]
	},

	plugins: [
	  new htmlWebpackPlugin({
		filename: 'main.html',
		template: 'index.html'
	  })
	]
};