export default {
  all(state) {
    return state
  },
  userId(state) {
    return state.userId
  },
  token(state) {
    return state.token
  },
  isAuthenticated(state) {
    return !!state.token
  },
}
