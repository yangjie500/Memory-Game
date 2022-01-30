const path = require("path");
const HtmlWebPlugin = require("html-webpack-plugin");
const { Configuration, HotModuleReplacementPlugin} = require("webpack")


module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.json','.tsx', '.ts', '.jsx', '.js']
  },
  plugins: [
    new HtmlWebPlugin({
      template: './src/index.html'
    }),
    // new HotModuleReplacementPlugin(),
  ],

  devServer: {
    static: "./dist",
    historyApiFallback: true,
    // hot: true
  },
  devtool: "inline-source-map"
}