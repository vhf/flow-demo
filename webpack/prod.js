const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, '../bin'),
    filename: '[name].bundle.js'
  },
  plugins: []
}
