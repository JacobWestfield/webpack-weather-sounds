const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common.js");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = merge(commonConfig, {
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist(prod)"),
    clean: true,
  },
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()],
  },
});
