const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      url: require.resolve('url/')
    };
    return config;
  }
);
