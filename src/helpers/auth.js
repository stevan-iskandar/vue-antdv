import * as constStorage from './../constants/constStorage'

export const isAuthenticated = () => {
  return JSON.parse(localStorage.getItem(constStorage.AUTH))
}
