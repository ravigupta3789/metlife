module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
	watch:true,
  resolve: {
    root: __dirname,
    alias: {
		DetailsCard:'app/components/detail_card.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
	devtool:'cheap-module-eval-source-map'
};
