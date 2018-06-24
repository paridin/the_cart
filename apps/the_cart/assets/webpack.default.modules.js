const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

export default [
  {
    test: /\.js$/, // rules for load JS files it supports es2015.
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env'],
        // plugins: [require('babel-plugin-transform-object-rest-spread')]
      }
    }
  },
  {
    test: /\.(sa|sc|c)ss$/, // rules for load the scss files
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
      ],
    })
  },
  {
    test: /\.(svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
    use: [{
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }]
  },
]
