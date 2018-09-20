const path = require("path");

module.exports = env => {
  return {
    entry: ["babel-polyfill", "./src/main.js"],
    output: {
      path: path.resolve(__dirname, "assets/scripts"),
      publicPath: "/assets/",
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["env"],
              plugins: ["transform-object-rest-spread"]
            }
          }
        }
      ]
    },
    devtool: env === "production" ? "source-map" : "inline-source-map"
  };
};
