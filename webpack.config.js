const path = require("path");

module.exports = {
  entry: "./src/index.js", // entrypoint app
  output: {
    filename: "bundle.js", // name of output file (bundle.js)
    path: path.resolve(__dirname, "dist"), // path to output file
    publicPath: "/", // path dev-server
  },
  mode: "development", // mode of build (development or production)
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // files with this extension will be processed by this rule (js or jsx)
        exclude: /node_modules/, // exclude node_modules
        use: {
          loader: "babel-loader", // use babel-loader for processing transpiling js and jsx files to es5
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // for import files without extension
  },
  // dev-server config
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // static files path
    },
    compress: true, // compress files
    port: 9000, // port for dev-server (localhost:9000)
    hot: true, // hot reload
    open: true, // open browser automatically
  },
};
