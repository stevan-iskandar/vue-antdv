<template>
  <BaseLayout />
</template>

<script>
import { isAuthenticated } from './helpers/auth'
import $_route from './helpers/route'
import BaseLayout from './layouts/BaseLayout.vue'
import * as constStorage from './constants/constStorage'

export default {
  name: 'App',
  components: {
    BaseLayout,
  },
  provide() {
    return {
      auth: this.auth,
      login: this.login,
      logout: this.logout,
    }
  },
  data() {
    return {
      auth: {
        isLoggedIn: isAuthenticated()
      },
    }
  },
  methods: {
    login() {
      this.auth.isLoggedIn = true
      localStorage.setItem(constStorage.AUTH, JSON.stringify(true))
      this.$router.push($_route('dashboard'))
    },
    logout() {
      this.auth.isLoggedIn = false
      localStorage.removeItem(constStorage.AUTH)
      this.$router.push($_route('login'))
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
