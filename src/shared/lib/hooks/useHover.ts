import { useCallback, useMemo, useState } from 'react'

interface UseHoverBind {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

type UseHoverReturn = [boolean, UseHoverBind]
function useHover (): UseHoverReturn {
  const [isHover, setIsHover] = useState(false)

  const onMouseEnter = useCallback(() => {
    setIsHover(true)
  }, [])

  const onMouseLeave = useCallback(() => {
    setIsHover(false)
  }, [])

  return useMemo(() => ([
    isHover,
    { onMouseEnter, onMouseLeave }
  ]), [isHover, onMouseEnter, onMouseLeave])
}

export { useHover }
