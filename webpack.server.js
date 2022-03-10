const path = require('path');
module.exports = {
  target: "node",

  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  mode: 'development',
  externals: {
    'react': 'React'
},
  // tell to run babel on every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/react",
            ["@babel/env", { targets: { browsers: ["last 2 versions"] } }],
          ]
        },
      },
    ],
  },
};
