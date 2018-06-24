// the extractTextPlugin is used to extract css/scss into the priv directory
// phoenix uses priv/css/app.css to load css
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// We'll add a const for where our elm source files lives
const defaultsModules = require('./webpack.default.modules')

const getPrevDir = root => root.split('/').slice(0, -1).join('/')

module.exports = {
    entry: [
      './react/index.js'
    ],
    output: {
      path: getPrevDir(__dirname) + "/priv/static",
      publicPath: '/',
      filename: "js/app.js"
    },
    devServer: {
      contentBase: './dist'
    },
    module: {
      rules: [...defaultsModules, {

      }]
    },
    plugins: [
      // we need mini-css-extract-plugin because we uses webpack 4
      new MiniCssExtractPlugin({
        // since phoenix uses app.css we extract in that directory
        // the output path is used at this point /priv/static is previouly loaded
        // that's why the filename has the folder and the app.css file
        filename: 'css/app.css',
        chunkFilename: 'css/[id].css'
      })
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    resolve: {
      modules: [
        "node_modules",
        __dirname + "/src"
      ],
      extensions: ['.scss', '.css', '.js', '.jsx']
    }
}
