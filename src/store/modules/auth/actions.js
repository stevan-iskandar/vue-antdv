import router from '@/router'
import $_route from '@/helpers/route'
import * as constRoute from '@/constants/constRoute'
import * as constStorage from '@/constants/constStorage'

export default {
  async login(context, payload) {
    await context.commit('setToken', payload)
    localStorage.setItem(constStorage.AUTH, JSON.stringify(context.getters.token))
    router.push($_route(constRoute.DASHBOARD))
  },
  logout(context) {
    context.commit('setToken', { token: '' })
    localStorage.removeItem(constStorage.AUTH)
    router.push($_route(constRoute.LOGIN))
  },
}
