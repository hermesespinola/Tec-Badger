/* eslint-disable import/no-extraneous-dependencies */
const config = {
  babelrc: false,
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
}

module.exports = require('babel-jest').createTransformer(config)
