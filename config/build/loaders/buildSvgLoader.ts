function buildSvgLoader () {
  return {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
    exclude: /node_modules/
  }
}

export { buildSvgLoader }
