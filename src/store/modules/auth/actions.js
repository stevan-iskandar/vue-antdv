import router from '@/router'
import $_route from '@/helpers/route'
import * as constRoute from '@/constants/constRoute'
import * as constStorage from '@/constants/constStorage'

let timer

const second = 1000
const minute = second * 60

export default {
  /**
   * @param context
   *
   * @param payload
   * const payload = { route, username, password }
   */
  async login(context, payload) {
    const { route, username, password } = payload

    // TODO validate login
    const validate = true

    if (validate) {
      const expiresIn = minute * 60
      const expirationDate = parseInt(expiresIn) + new Date().getTime()

      timer = setTimeout(() => {
        context.dispatch('logout')
      }, expiresIn)

      const userId = username
      const token = password

      context.commit('setUserId', userId)
      context.commit('setToken', token)

      localStorage.setItem(constStorage.AUTH_USER, userId)
      localStorage.setItem(constStorage.AUTH_TOKEN, token)
      localStorage.setItem(constStorage.AUTH_TOKEN_EXP, expirationDate)


      const replaceUrl =
        route.query[constRoute.QUERY_PATH_REDIRECT] ||
        $_route(constRoute.DASHBOARD);

      router.replace(replaceUrl);
    }
  },
  logout(context) {
    context.commit('setUserId', '')
    context.commit('setToken', '')

    clearTimeout(timer)

    localStorage.removeItem(constStorage.AUTH_USER)
    localStorage.removeItem(constStorage.AUTH_TOKEN)
    localStorage.removeItem(constStorage.AUTH_TOKEN_EXP)

    router.replace($_route(constRoute.LOGIN));
  },
  async appInit(context) {
    const userId = localStorage.getItem(constStorage.AUTH_USER)
    const token = localStorage.getItem(constStorage.AUTH_TOKEN)
    const tokenExp = localStorage.getItem(constStorage.AUTH_TOKEN_EXP)
    const expiresIn = parseInt(tokenExp) - new Date().getTime()

    if (expiresIn < 0)
      return

    // TODO cek auth
    const validate = userId && token

    if (validate) {
      timer = setTimeout(() => {
        context.dispatch('logout')
      }, expiresIn)

      context.commit('setUserId', userId)
      context.commit('setToken', token)
    }
  },
}
