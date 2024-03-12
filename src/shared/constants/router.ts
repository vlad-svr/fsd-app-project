enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN_PAGE = 'forbidden',
}

const getRouteMain = () => '/'
const getRouteAbout = () => '/about'
const getRouteProfile = (id: string) => `/profile/${id}`
const getRouteArticles = () => '/articles'
const getRouteArticleDetails = (id: string) => `/articles/${id}`
const getRouteArticleCreate = () => '/articles/new'
const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
const getRouteAdmin = () => '/admin-panel'
const getRouteForbidden = () => '/forbidden'
const getRouteNotFound = () => '*'

export {
  getRouteMain,
  getRouteAbout,
  getRouteAdmin,
  getRouteProfile,
  getRouteArticles,
  getRouteNotFound,
  getRouteForbidden,
  getRouteArticleEdit,
  getRouteArticleCreate,
  getRouteArticleDetails
}
export { AppRoutes }
