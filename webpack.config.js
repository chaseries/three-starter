var path = require("path");


module.exports = {
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname + "/build"),
    filename: "[name].js"
  },

  module: {
    loaders: [
      { test: /\.js$/,
        exclude: [ /node_modules/ ],
        loaders: [ "babel-loader",
          "eslint-loader"
          ]
      }
    ]
  }
}
