import { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

function BugButton () {
  const [error, setError] = useState(false)

  const onThrow = () => {
    setError(true)
  }

  useEffect(() => {
    if (!error) return
    throw new Error('Error')
  }, [error])

  return (
      <Button onClick={onThrow}>
          Throw Error
      </Button>
  )
}

export { BugButton }
