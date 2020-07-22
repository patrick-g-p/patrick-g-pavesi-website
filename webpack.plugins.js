const path = require("path");
const _MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _TerserPlugin = require("terser-webpack-plugin");
const _OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const _WatchTimePlugin = require("webpack-watch-time-plugin");

const WatchTimePlugin = new _WatchTimePlugin();

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: "[name].bundle.css",
  chunkFilename: "[id].css",
});

const OptimizeCSSAssetsPlugin = new _OptimizeCSSAssetsPlugin({
  cssProcessorPluginOptions: {
    preset: ["default", {discardComments: {removeAll: true}}],
  },
});

const minifier = [
  new _TerserPlugin({
    terserOptions: {
      output: {
        comments: false,
      },
      compress: {
        drop_console: true,
      },
      extractComments: true,
      sourceMap: true,
      mangle: true, // Note `mangle.properties` is `false` by default.
    },
  }),
];

module.exports = {
  WatchTimePlugin,
  MiniCssExtractPlugin,
  OptimizeCSSAssetsPlugin,
  minifier,
};
