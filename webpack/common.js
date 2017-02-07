const path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'remove-flow-types-loader',
      include: path.join(__dirname, '../src')
    }]
  },
  plugins: []
}
