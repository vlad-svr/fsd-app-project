import { type RouteProps } from 'react-router-dom'
import MainPage from 'pages/MainPage/ui/MainPage'
import { AboutPage } from 'pages/AboutPage'

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />
  }
}

export { AppRoutes, RoutePaths, routeConfig }
