const webpack = require("webpack");
const library = "[name]_lib";
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
console.log("process.env.NODE_ENV>>>>", process.env.NODE_ENV);
module.exports = {
	mode: "production",
	entry: {
		vendors: ["react", "@babel/polyfill", "react-dom", "core-js", "@material-ui/core"]
	},
	output: {
		filename: "[name].dll.js",
		path: path.resolve(__dirname, "./../config"),
		library
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, "./../config/[name]-manifest.json"),
			name: library
		}),
		new BundleAnalyzerPlugin()
	]
};
