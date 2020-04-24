require(`dotenv`).config();
const webpack = require(`webpack`);
const withOffline = require(`next-offline`);

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    config.module.rules.push({
      test: /\.md$/,
      use: `raw-loader`,
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(withOffline(nextConfig));
