const path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './frontend/webpack-bootstrap.js',
	output: {
		path: path.resolve(__dirname, 'public', 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
			{
				test: /\.scss$/,
				use: [
					"style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
			}
    ]
  },
	plugins: [
    new HtmlWebPackPlugin({
    	template: "./frontend/index.html",
    	filename: "../index.html"
  	}),
		new LiveReloadPlugin()
	]
};
