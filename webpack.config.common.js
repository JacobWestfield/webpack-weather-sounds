const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    resolve: {
        extensions: [".tsx", ".jsx", ".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            // {
            //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //   type: "asset/resoucre",
            // },
            //    Данное правило не работает. Если его оставить, будет ошибка при сборке.
            //    Если убрать то шрифты нормально собираются
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.mp3$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    }
};
