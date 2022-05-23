const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	mode: "production",
	resolve: {
		extensions: [".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html",
		}),
	],
	devServer: {
		//donde esta el proyecto final
		static: path.join(__dirname, "dist"),
		//no se pero evita errores
		compress: true,
		//puerto custom a utilizar (opcional)
		port: 3005,
		//no se, averiguar
		historyApiFallback: true,
	},
};
