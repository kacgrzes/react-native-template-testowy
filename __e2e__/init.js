require('babel-polyfill')

const detox = require('detox')
const config = require('../package.json').detox

before(async () => {
  await detox.init(config)
})

beforeEach(async () => {
  await device.reloadReactNative()
})

after(async () => {
  await detox.cleanup()
})
