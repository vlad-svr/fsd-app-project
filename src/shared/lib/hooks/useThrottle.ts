import { useCallback, useEffect, useRef } from 'react'

export function useThrottle (callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const timer = timerRef.current

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args)
      throttleRef.current = true

      timerRef.current = setTimeout(() => {
        throttleRef.current = false
      }, delay)
    }
  }, [callback, delay])
}
