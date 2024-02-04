import { useEffect } from 'react'

export function useInitialEffect (callback: () => void) {
  useEffect(() => {
    if (_PROJECT_ !== 'storybook' && _PROJECT_ !== 'jest') {
      callback()
    }
    // eslint-disable-next-line
    }, []);
}
