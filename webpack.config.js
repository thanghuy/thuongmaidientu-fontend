const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    module: {
      rules: [
        {
          test: /\.css?$/,
          use: [
            {
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'less-loader', // compiles Less to CSS
            },
          ],
        },
      ],
    },
  };