import { createSelector } from '@reduxjs/toolkit'
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter'

export const getCounterValue = createSelector(getCounter, (state) => state.value)
