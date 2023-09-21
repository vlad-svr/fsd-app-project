import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins ({
  paths,
  isDev,
  apiURL
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev),
      _API_BASE_URL_: JSON.stringify(apiURL)
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev && new BundleAnalyzerPlugin({ openAnalyzer: false })
  ].filter(Boolean) as webpack.WebpackPluginInstance[]
}
