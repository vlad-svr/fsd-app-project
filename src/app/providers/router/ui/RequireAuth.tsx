import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserAuthData, getUserRoles, type UserRole } from '@/entities/User'
import { RoutePaths } from '@/shared/config/routeConfig/routeConfig'
import { useMemo } from 'react'

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRole[]
}

function RequireAuth ({ children, roles }: RequireAuthProps) {
  const isAuth = useSelector(getUserAuthData)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some(requiredRole => userRoles?.includes(requiredRole))
  }, [roles, userRoles])

  if (!isAuth) {
    return <Navigate to={RoutePaths.main} state={{ from: location }} replace />
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePaths.forbidden} state={{ from: location }} replace />
  }

  return children
}

export { RequireAuth }
