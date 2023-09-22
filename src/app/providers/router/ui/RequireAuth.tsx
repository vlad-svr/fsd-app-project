import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserAuthData } from 'entities/User'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
  children: JSX.Element
}

function RequireAuth ({ children }: RequireAuthProps) {
  const isAuth = useSelector(getUserAuthData)
  const location = useLocation()

  if (!isAuth) {
    return <Navigate to={RoutePaths.main} state={{ from: location }} replace />
  }

  return children
}

export { RequireAuth }
