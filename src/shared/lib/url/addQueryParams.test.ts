import { getQueryParams } from './addQueryParams'

describe('addQueryParams', () => {
  test('test with one param', () => {
    const params = getQueryParams({ test: 'value' })

    expect(params).toBe('?test=value')
  })

  test('test with multiple param', () => {
    const params = getQueryParams({ test: 'value', second: '2' })

    expect(params).toBe('?test=value&second=2')
  })

  test('test with undefined', () => {
    const params = getQueryParams({ test: undefined, second: undefined })
    const params2 = getQueryParams({ test: undefined, second: '2' })

    expect(params).toBe('')
    expect(params2).toBe('?second=2')
  })
})
