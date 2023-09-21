import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'
import { type Configuration } from 'mini-css-extract-plugin'

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development'
  const port = env.port || 3000
  const apiURL = env.apiURL || 'http://localhost:8000'

  const isDev = mode === 'development'

  return buildWebpackConfig({ mode, paths, port, isDev, apiURL })
}
