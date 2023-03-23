const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname + '/public'),
    filename: 'bundle.js',
  },
  context: __dirname,
  devtool: "source-map",
  devServer: {
    static: {
      directory: __dirname + "/public",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
        // loader: "babel-loader",
        // options: {
        //   presets: ["@babel/preset-env", "@babel/preset-react"],
        // },
      },
    ],
  },
};
