const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        "home": path.resolve(__dirname, "main", "core", "blueprints", "home", "static", "js", "index.jsx")
    },
    output: {
        filename: "[name]_bundle.js",
        path: path.resolve(__dirname, "main", "core", "static", "dist")
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name]_bundle.css")
    ]
}