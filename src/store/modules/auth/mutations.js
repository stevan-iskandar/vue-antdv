export default {
  /**
   * @param state
   *
   * @param payload
   * const payload = {
   *
   *  userId: '',
   *
   *  token: '',
   *
   * }
   */
  setAll(state, payload) {
    const { userId, token } = payload

    state.userId = userId
    state.token = token
  },
  /**
   * @param state
   *
   * @param payload
   * const payload = ''
   */
  setUserId(state, payload) {
    state.userId = payload
  },
  /**
   * @param state
   *
   * @param payload
   * const payload = ''
   */
  setToken(state, payload) {
    state.token = payload
  },
}
