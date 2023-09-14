const rules = require("./webpack.rules");
const webpack = require('webpack');

rules.push(
  {
    test: /\.(scss)$/, // all scss files will be handled
    // Use loaders in that specific reverse order
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: { importLoaders: 1 },
      },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [[
                'autoprefixer'
              ]]
            }
        },
      },
      {
        loader: "sass-loader",
      },
    ],
  },
  {
    test: /\.(png|jpe?g|gif|ico|svg)$/, // We will handle of these file extensions
    type: "asset/resource",
  }
);

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ]
};
