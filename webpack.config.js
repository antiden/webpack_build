const THEMEDIR = "."
const path = require('path')
const WebpackAssetsManifest = require('webpack-assets-manifest')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  entry: {
    bundle: [
      `./src/js/index.js`,
      `./src/stylus/index.styl`
    ],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, `${THEMEDIR}/dist`),
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.styl$/,
        use: [
          {loader: MiniCssExtractPlugin.loader, options: {publicPath: 'dist'}},
          {loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {loader: "stylus-loader", 
            options: {
              stylusOptions: {
                use: [require("nib")(), "rupture"],
                import: ["nib"],
                compress: true,
                sourceMap: true,
                resolveURL: false,
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    new WebpackAssetsManifest(),
    new CopyPlugin({
      patterns: [
        {
          to({ context, absoluteFilename }) {
            return `favicons/${path.relative(context, absoluteFilename)}`;
          },
          from: `./src/favicons`,
        },
        {
          to({ context, absoluteFilename }) {
            return `fonts/${path.relative(context, absoluteFilename)}`;
          },
          from: `./src/fonts`,
        },
        {
          to({ context, absoluteFilename }) {
            return `images/${path.relative(context, absoluteFilename)}`;
          },
          from: `./src/images`,
        }
      ],
    }),
  ]
};