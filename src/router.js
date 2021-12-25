import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from './helpers/auth'
import $_route from './helpers/route'
import DashboardPage from './pages/admin/dashboard/DashboardPage.vue'
import LoginPage from './pages/admin/auth/LoginPage.vue'
import Error404 from './pages/admin/error/Error404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'dashboard',
      path: '/',
      meta: { needAuth: true },
      component: DashboardPage,
    },
    {
      name: 'login',
      path: '/login',
      meta: { needAuth: false },
      component: LoginPage,
    },
    {
      path: '/:error404(.*)',
      meta: { needAuth: true },
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
    console.log('redirect to login')
    next($_route('login'))
  } else if (!needAuth && isAuth) {
    console.log('redirect to dashboard')
    next($_route('dashboard'))
  } else {
    console.log('next')
    next()
  }
})

export default router
