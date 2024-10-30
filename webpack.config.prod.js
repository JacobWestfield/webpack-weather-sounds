const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common.js");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()],
  },
});
