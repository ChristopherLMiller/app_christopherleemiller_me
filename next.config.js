require('dotenv').config();
const webpack = require('webpack');
const withOffline = require('next-offline');

const nextConfig = {
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return config;
  },
};

module.exports = withOffline(nextConfig);
