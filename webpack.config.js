const THEMEDIR = ".";
const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    bundle: [
      `${THEMEDIR}/src/js/index.js`,
      `${THEMEDIR}/src/stylus/index.styl`
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
        use: {
          loader: "babel-loader"
        }
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
            return `${THEMEDIR}/favicons/${path.relative(context, absoluteFilename)}`;
          },
          from: `${THEMEDIR}/src/favicons`,
        },
        {
          to({ context, absoluteFilename }) {
            return `${THEMEDIR}/fonts/${path.relative(context, absoluteFilename)}`;
          },
          from: `${THEMEDIR}/src/fonts`,
        },
        {
          to({ context, absoluteFilename }) {
            return `${THEMEDIR}/images/${path.relative(context, absoluteFilename)}`;
          },
          from: `${THEMEDIR}/src/images`,
        }
      ],
    }),
  ]
};