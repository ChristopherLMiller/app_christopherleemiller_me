require(`dotenv`).config();
const webpack = require(`webpack`);
const withOffline = require(`next-offline`);

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    config.module.rules.push({
      test: /\.md$/,
      use: `raw-loader`,
    });

    return config;
  },
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? `service-worker.js`
      : `static/service-worker.js`,
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: `NetworkFirst`,
        options: {
          cacheName: `OfflineCache`,
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: `/service-worker.js`,
          destination: `/_next/static/service-worker.js`,
        },
      ];
    },
  },
};

module.exports = withOffline(nextConfig);
