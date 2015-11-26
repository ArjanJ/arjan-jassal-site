module.exports = {
	entry: './src/entry.js',
	output: {
		filename: 'build/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader!autoprefixer-loader?browsers=last 2 version'
			}
		]
	}
};