import { createRouter, createWebHistory } from 'vue-router'
import store from './store/index'
import routes from './constants/routes'
import $_route from './helpers/route'
import * as constRoute from './constants/constRoute'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { left: 0, top: 0 }
  },
})

router.beforeEach((to, _from, next) => {
  const { needAuth } = to.meta
  const isAuth = store.getters['auth/isAuthenticated']

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
