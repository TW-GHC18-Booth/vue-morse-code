const webpack = require('webpack');
const appConfig = require('./src/app.config');
const webpackAlias = require('./aliases.config').webpack;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  baseUrl: '/',
  productionSourceMap: false,
  configureWebpack: {
    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: appConfig.title,
    // Set up all the aliases we use in our app.
    resolve: { alias: webpackAlias },
    plugins: [
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // new CopyWebpackPlugin([
      //   { from: 'node_modules/bv-design-system/dist/assets', to: 'styleguide/assets' }
      // ]),
      // new webpack.ProvidePlugin({
      //   bvLoginView: 'bv-login-view'
      // })
    ]
  },
  // css: {
  //   extract: true,
  //   // Enable CSS modules for all CSS/pre-processor files.
  //   // This option does not affect *.vue files.
  //   modules: true,
  //   loaderOptions: {
  //     css: {
  //       localIdentName: '[name]__[local]'
  //     }
  //   }
  // },
  // // Configure Webpack's dev server.
  // https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md
  // devServer: {
  //   ...(process.env.DEV_MODE !== 'offline'
  //     ? { }
  //     : { before: mockApi }),
  //   disableHostCheck: true
  // }
};
