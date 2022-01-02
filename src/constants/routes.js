import * as constRoute from './constRoute'

const DashboardPage = () => import('@/pages/admin/dashboard/DashboardPage.vue')
const LoginPage = () => import('@/pages/admin/auth/LoginPage.vue')
const Error404 = () => import('@/pages/admin/error/Error404.vue')

const routes = [
  {
    name: constRoute.DASHBOARD,
    path: constRoute.PATH_DASHBOARD,
    meta: { needAuth: true },
    component: DashboardPage,
  },
  {
    name: constRoute.LOGIN,
    path: constRoute.PATH_LOGIN,
    meta: { needAuth: false },
    component: LoginPage,
  },
  {
    name: constRoute.ERROR_404,
    path: constRoute.PATH_ERROR_404,
    meta: { needAuth: true },
    props: true,
    component: Error404,
  },
]

export default routes
