import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePaths.main,
    Icon: MainIcon,
    text: 'main_page'
  },
  {
    path: RoutePaths.about,
    Icon: AboutIcon,
    text: 'about_us'
  },
  {
    path: RoutePaths.profile,
    Icon: ProfileIcon,
    text: 'profile',
    authOnly: true
  },
  {
    path: RoutePaths.articles,
    Icon: ArticleIcon,
    text: 'articles',
    authOnly: true
  }
]
