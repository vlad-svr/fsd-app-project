export function getQueryParams (params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value)
    }
  })

  const queryString = searchParams.toString()

  return queryString ? `?${queryString}` : ''
}

export function addQueryParams (params: OptionalRecord<string, string>) {
  const paramsQuery = getQueryParams(params)
  window.history.pushState(null, '', paramsQuery)
}
