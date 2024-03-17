import { useTranslation } from 'react-i18next';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { Button } from '@/shared/ui/Button';

function RedesignedCounter() {
  const { t } = useTranslation();
  const counter = useCounterValue();
  const { decrement, increment } = useCounterActions();

  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  return (
    <div data-testid="container">
      <h1 data-testid="value-title">
        {'NEW REDESIGNED COUNTER:'} {t('value')} {counter}
      </h1>
      <Button onClick={handleIncrement} data-testid="increment-btn">
        {t('increment')}
      </Button>
      <Button onClick={handleDecrement} data-testid="decrement-btn">
        {t('decrement')}
      </Button>
    </div>
  );
}

export { RedesignedCounter };
