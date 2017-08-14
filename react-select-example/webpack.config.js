module.exports = {
  entry: './app/index.jsx',
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }]
  },
  output: {
    filename: './dist/bundle.js'
  }
}