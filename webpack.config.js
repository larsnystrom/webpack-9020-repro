var path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: "app.ts",
  },
  output: {
    publicPath: "/assets/",
    path: path.join(__dirname, "public", "assets"),
    filename: "[name].[hash].js",
  },
  target: "web",
  devtool: false,
  resolve: {
    modules: [__dirname, "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /(?<!\.test)\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
};
