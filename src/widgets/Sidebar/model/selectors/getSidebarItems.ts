import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import { type SidebarItemType } from '../types/sidebar'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/constants/router'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (user) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'main_page'
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'about_us'
      }
    ]

    if (user) {
      sidebarItemsList.push({
        path: getRouteProfile(user.id),
        Icon: ProfileIcon,
        text: 'profile',
        authOnly: true
      },
      {
        path: getRouteArticles(),
        Icon: ArticleIcon,
        text: 'articles',
        authOnly: true
      })
    }

    return sidebarItemsList
  }
)
