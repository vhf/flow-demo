const TARGET = process.env.npm_lifecycle_event
const common = require('./common.js')
const prod = require('./prod')
const dev = require('./dev')
const merge = require('webpack-merge')

switch (TARGET) {
  case 'build':
    module.exports = merge(common, prod)
    break
  case 'start':
    module.exports = merge(common, dev)
    break
}
