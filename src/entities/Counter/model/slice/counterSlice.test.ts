import { counterReducer, counterActions, type CounterSchema } from 'entities/Counter'

describe('counterSlice', () => {
  test('increment', () => {
    const state: CounterSchema = { value: 10 }
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
  })

  test('decrement', () => {
    const state: CounterSchema = { value: 10 }
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
  })

  test('passing empty state and checking default state', () => {
    const state = undefined
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 1 })
  })
})
