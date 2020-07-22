const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CSSLoader = {
  test: /\.(s[c|a]ss)|(css)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "style-loader",
    },
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: path.resolve(__dirname, "public/dist"),
      },
    },
    {
      loader: "css-loader",
      options: {importLoaders: 1},
    },
    {
      loader: "postcss-loader",
      options: {
        config: {
          path: path.resolve(__dirname, "postcss.config.js"),
        },
      },
    },
    {
      loader: "sass-loader",
    },
  ],
};

const JSLoader = {
  test: /\.(js|test.js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      configFile: path.resolve(__dirname, "babel.config.js"),
    },
  },
};

const FontLoader = {
  test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
  use: {
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
      publicPath: path.resolve(__dirname, "public/dist"),
    },
  },
};

module.exports = [CSSLoader, JSLoader, FontLoader];
