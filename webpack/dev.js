const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'output.bundle.js'
  },
  plugins: []
}
