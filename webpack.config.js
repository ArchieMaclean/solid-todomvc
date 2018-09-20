const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  target: 'web',
	output: {
    filename: "bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
  },
	resolve: {
		extensions: ['.jsx', '.js']
	},
	module: {
		rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: ['jsx-dom-expressions']
        }
      }
    }]
	}
}