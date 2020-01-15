const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const getPath = (url) => path.resolve(__dirname, url)
const DIST_PATH = getPath('dist')
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: '[name].[hash:5].js',
    path: DIST_PATH
  },
  devServer: {
    contentBase: DIST_PATH,
    port: 8082
  },
  resolve: {
    alias: {
      components: getPath('src/components/'),
      pages: getPath('src/pages/'),
      server: getPath('src/server/'),
      assets: getPath('src/assets/')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ts React',
      template: './public/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}