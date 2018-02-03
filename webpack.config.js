const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    './js/app.js',
    './js/ClientApp.jsx'
  ],
  devtool:
    process.env.NODE_ENV === "development" ? "cheap-eval-source-map" : false,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', 'css']
    // alias: {
    //   react: 'preact-compat',
    //   'react-dom': 'preact-compat',
    // },
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new UglifyJSPlugin({ sourceMap: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

if (process.env.NODE_ENV === "development") {
  config.entry.unshift(
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000"
  );
}
module.exports = config;
