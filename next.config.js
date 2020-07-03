const withOffline = require(`next-offline`);
const withMDX = require(`@next/mdx`)({
  extension: /\.mdx?$/,
});
const path = require(`path`);

const {
  WebpackBundleSizeAnalyzerPlugin,
} = require(`webpack-bundle-size-analyzer`);

const nextConfig = {
  webpack: (config) => {
    if (process.env.ANALYZE) {
      config.plugins.push(new WebpackBundleSizeAnalyzerPlugin(`stats.txt`));
    }

    config.resolve.alias.components = path.join(__dirname, `components`);
    config.resolve.alias.data = path.join(__dirname, `data`);
    config.resolve.alias.utils = path.join(__dirname, `utils`);
    config.resolve.alias.config = path.join(__dirname, `config`);
    config.resolve.alias.styles = path.join(__dirname, `styles`);
    config.resolve.alias.lib = path.join(__dirname, `lib`);
    config.resolve.alias.interfaces = path.join(__dirname, `interfaces`);
    config.resolve.alias.pages = path.join(__dirname, `pages`);
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
    reactMode: "concurrent",
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

module.exports = withOffline(withMDX(nextConfig));
