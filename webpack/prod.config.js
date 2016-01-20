/* eslint max-len: 0 */

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import PurifyCSSPlugin from 'bird3-purifycss-webpack-plugin';

import baseConfig from './base.config';

export default {
  ...baseConfig,
  module: {
    loaders: [
      ...baseConfig.module.loaders,
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
        loader: 'url-loader'
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap'),
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!less-loader?sourceMap=true')
      }
    ]
  },
  plugins: [
    // extract css
    new ExtractTextPlugin('[name]-[chunkhash].css'),

    // set env
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new PurifyCSSPlugin({
      purifyOptions: { info: true },
      paths: [
        'app/**/*.jsx',
        'app/**/*.js',
        'server/views/**/*.hbs',
        'shared/universal-render.jsx',

        // VENDORS WHICH CREATE HTML WITH ID OR CLASSES
        'node_modules/iso/src/iso.js',
        'node_modules/react-router/lib/*.js',
        'node_modules/react-intl/lib/components/*.js'
      ]
    }),

    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        sequences: true,
        dead_code: true,
        drop_debugger: true,
        comparisons: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        drop_console: false
      },
      output: {
        comments: false
      }
    }),

    ...baseConfig.plugins
  ]
};
