import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from './helpers/auth'
import $_route from './helpers/route'
import * as constRoute from './constants/constRoute'

const DashboardPage = () => import('./pages/admin/dashboard/DashboardPage.vue')
const LoginPage = () => import('./pages/admin/auth/LoginPage.vue')
const Error404 = () => import('./pages/admin/error/Error404.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
  ],
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { left: 0, top: 0 }
  },
})

router.beforeEach((to, _from, next) => {
  const { needAuth } = to.meta
  const isAuth = isAuthenticated()

  if (needAuth && !isAuth) {
    // console.log('redirect to login')
    next($_route(constRoute.LOGIN))
  } else if (!needAuth && isAuth) {
    // console.log('redirect to dashboard')
    next($_route(constRoute.DASHBOARD))
  } else {
    // console.log('next')
    next()
  }
})

export default router
