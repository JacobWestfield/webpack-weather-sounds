const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common.js");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(commonConfig, {
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist(dev)"),
        clean: true
    },
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 3000,
        hot: true,
        open: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public/favicon.png"),
                    to: path.resolve(__dirname, "dist(dev)")
                }
            ]
        })
    ]
});
