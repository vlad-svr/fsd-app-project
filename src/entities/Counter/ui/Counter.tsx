import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { Button } from '@/shared/ui/Button'

function Counter () {
  const { t } = useTranslation()
  const counter = useSelector(getCounterValue)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
      <div data-testid="container">
          <h1 data-testid="value-title">{t('value')} {counter}</h1>
          <Button
              onClick={increment}
              data-testid="increment-btn"
          >
              {t('increment')}
          </Button>
          <Button
              onClick={decrement}
              data-testid="decrement-btn"
          >
              {t('decrement')}
          </Button>
      </div>
  )
}

export { Counter }
