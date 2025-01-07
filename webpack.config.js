const path = require("path");
var nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: "./build/appgenerator.js",
    output: {
        filename: "appgenerator.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        alias: {
            path: require.resolve("path-browserify")
        }
    },
    target: 'node',
    externals: [nodeExternals()],
    watch: true,

}