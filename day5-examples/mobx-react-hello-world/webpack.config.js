module.exports = {
  entry: './app/index.jsx',
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-1', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      }
    }]
  },
  output: {
    filename: './dist/bundle.js'
  }
}