module.exports = {
  entry: './src/entry.js',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  output: {
    filename: './dist/bundle.js'
  }
}