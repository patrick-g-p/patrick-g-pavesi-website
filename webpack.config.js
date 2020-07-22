const path = require("path");

const Entrys = require("./webpack.entries.js");
const Loaders = require("./webpack.loaders.js");
const Plugins = require("./webpack.plugins.js");
const Alias = require("./webpack.alias.js");

const PRODUCTION = "production";
const ifProduction = webpackMode => {
  return webpackMode === PRODUCTION;
};

module.exports = (env = "production") => {
  console.log(`webpack is running in --- ${env} --- env`);

  const config = {
    entry: Entrys,
    output: {
      path: path.resolve(__dirname, "public/dist"), // dev and prod bundles go here -- gets rewritten every time
      filename: "[name].bundle.js",
      chunkFilename: "[name].bundle.js",
      publicPath: path.resolve(__dirname, "public/dist"),
    },
    module: {
      rules: Loaders,
    },
    plugins: [Plugins.WatchTimePlugin, Plugins.MiniCssExtractPlugin, Plugins.OptimizeCSSAssetsPlugin],
    optimization: {
      minimize: ifProduction(env),
      minimizer: ifProduction(env) ? Plugins.minifier : [],
      splitChunks: {
        chunks: "async",
        minChunks: 2,
        maxAsyncRequests: 6,
      },
    },
    devtool: ifProduction(env) ? "source-map" : "inline-source-map", // Default development sourcemap
    watch: !ifProduction(env),
    watchOptions: {
      ignored: ["node_modules", "node"],
    },
    resolve: {
      alias: Alias,
    },
    stats: {
      children: ifProduction(env),
    },
  };

  return config;
};
