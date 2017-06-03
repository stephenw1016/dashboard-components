let webpackConfig = require('./webpack.test');

module.exports = function (config) {
  let _config = {
    basePath: '',

    frameworks: ['jasmine'],

    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-phantomjs-launcher'
    ],

    files: [
      { pattern: './config/karma-test-shim.js', watched: false }
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'coverage', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage',
      type: 'lcovonly',
      reporters: [
        { type: 'lcovonly', subdir: '/' }
      ]
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    phantomjsLauncher: {
      exitOnResourceError: true
    },

    singleRun: true
  };

  config.set(_config);
};
