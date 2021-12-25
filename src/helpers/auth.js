import * as constStorage from './../constants/constStorage'

export const getStorageAuth = () => {
  return JSON.parse(localStorage.getItem(constStorage.AUTH)) ?? {}
}

export const isAuthenticated = () => {
  const storageAuth = getStorageAuth()
  if (!Object.keys(storageAuth).length)
    return false
  return true
}
