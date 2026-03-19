const path = require('path');
const { createFullstackRspackConfig } = require('@lark-apaas/fullstack-rspack-preset');

const isDev = process.env.NODE_ENV !== 'production';
const filteredPluginNames = new Set([
  'OgMetaInjectionPlugin',
  'RuntimeInjectionPlugin',
  'SlardarPerformanceMonitorPlugin',
  'ViewContextInjectionPlugin',
]);

const config = createFullstackRspackConfig({
  entry: {
    main: './client/src/index.tsx',
  },
  resolve: {
    tsConfig: {
      configFile: path.resolve(__dirname, './tsconfig.app.json'),
    },
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
    },
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'chunks/[name].[contenthash:8].js',
  },
  optimization: isDev
    ? {}
    : {
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
          cacheGroups: {
            asyncVendors: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'async',
              name: 'async-vendors',
              priority: 10,
            },
          },
        },
      },
});

config.plugins = (config.plugins || []).filter((plugin) => {
  return !filteredPluginNames.has(plugin?.constructor?.name);
});

module.exports = config;
