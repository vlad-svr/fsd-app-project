import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'shared/lib/classNames/classNames'
import { userActions } from 'entities/User'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'
import { Sidebar } from 'widgets/Sidebar'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
      <div className={classNames('app', {})}>
          <Suspense fallback="">
              <NavBar />
              <div className="content-app">
                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  )
}

export default App
