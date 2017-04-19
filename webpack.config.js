module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  watch: true,
  devtool: "source-map",
  module: {
    loaders: [
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test:/\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
