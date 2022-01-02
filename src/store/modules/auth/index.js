import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import * as constStorage from '@/constants/constStorage'

export default {
  namespaced: true,
  state() {
    return {
      userId: '',
      token: localStorage.getItem(constStorage.AUTH) || '',
    }
  },
  getters,
  mutations,
  actions,
}
