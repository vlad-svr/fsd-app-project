import {useCallback, useState} from 'react';

function useToggle(defaultState: boolean = false) {
  const [open, setOpen] = useState(defaultState);

  const onToggle = useCallback(() => {}, []);
}
