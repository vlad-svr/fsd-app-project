import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from '@/shared/lib/classNames/classNames'
import { getUserIsInit, userActions } from '@/entities/User'
import AppRouter from '@/app/providers/router'
import { NavBar } from '@/widgets/NavBar'
import { Sidebar } from '@/widgets/Sidebar'

function App () {
  const dispatch = useDispatch()
  const isInitialized = useSelector(getUserIsInit)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
      <div className={classNames('app', {})}>
          <Suspense fallback="">
              <NavBar />
              <div className="content-app">
                  <Sidebar />
                  {isInitialized && <AppRouter />}
              </div>
          </Suspense>
      </div>
  )
}

export default App
