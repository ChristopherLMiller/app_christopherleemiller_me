require('dotenv').config();
const webpack = require('webpack');
const withOffline = require('next-offline');
// const withCSS = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');

const nextConfig = {
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return config;
  },
};

module.exports = withOffline(withTypescript(nextConfig));
