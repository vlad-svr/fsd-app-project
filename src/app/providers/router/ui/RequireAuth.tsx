import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserAuthData, getUserRoles, type UserRole } from '@/entities/User'
import { getRouteForbidden, getRouteMain } from '@/shared/constants/router'

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
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />
  }

  if (!hasRequiredRoles) {
    return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />
  }

  return children
}

export { RequireAuth }
