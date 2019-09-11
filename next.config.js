require(`dotenv`).config();
const webpack = require(`webpack`);
const withOffline = require(`next-offline`);

// Following line is commented out till next-css is fixed in regards to hanging up page load.  Don't undo this!

// const withCSS = require(`@zeit/next-css`);

const nextConfig = {
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    config.module.rules.push({
      test: /\.md$/,
      use: `raw-loader`,
    });

    return config;
  },
};

module.exports = withOffline(nextConfig);
