import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import { type SidebarItemType } from '../types/sidebar'
import { RoutePaths } from '@/shared/constants/router'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (user) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePaths.main,
        Icon: MainIcon,
        text: 'main_page'
      },
      {
        path: RoutePaths.about,
        Icon: AboutIcon,
        text: 'about_us'
      }
    ]

    if (user) {
      sidebarItemsList.push({
        path: RoutePaths.profile + user.id,
        Icon: ProfileIcon,
        text: 'profile',
        authOnly: true
      },
      {
        path: RoutePaths.articles,
        Icon: ArticleIcon,
        text: 'articles',
        authOnly: true
      })
    }

    return sidebarItemsList
  }
)
