const webpack = require('webpack');
const appConfig = require('./src/app.config');
const webpackAlias = require('./aliases.config').webpack;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  baseUrl: '/',
  productionSourceMap: false,
  configureWebpack: {
    name: appConfig.title,
    resolve: { alias: webpackAlias },
    plugins: []
  }
};
