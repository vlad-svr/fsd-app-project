import { type BuildOptions } from '../types/config'
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

interface BuildBabelLoaderProps extends BuildOptions {
  isTSX: boolean
}

function buildBabelLoader ({ isDev, isTSX }: BuildBabelLoaderProps) {
  const isProd = !isDev

  return {
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          isDev && require.resolve('react-refresh/babel'),
          ['@babel/plugin-transform-typescript', { isTSX }],
          '@babel/plugin-transform-runtime',
          isTSX && isProd && [babelRemovePropsPlugin(), { props: ['data-testid'] }]
        ].filter(Boolean)
      }
    }
  }
}

export { buildBabelLoader }
