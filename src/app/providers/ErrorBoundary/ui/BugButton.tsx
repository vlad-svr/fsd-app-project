import { useEffect, useState } from 'react'
import { Button } from '@/shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

function BugButton () {
  const { t } = useTranslation()
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
          {t('Throw Error')}
      </Button>
  )
}

export { BugButton }
