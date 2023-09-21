import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  PROFILE = 'profile',
}

const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*'
}

const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: RoutePaths.profile,
    element: <ProfilePage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />
  }
}

export { AppRoutes, RoutePaths, routeConfig }
