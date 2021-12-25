<template>
  <AdminLayout v-if="auth.isLoggedIn" />
  <AdminAuthLayout v-else />
</template>

<script>
import AdminAuthLayout from './AdminAuthLayout.vue'
import AdminLayout from './AdminLayout.vue'

export default {
  name: 'BaseLayout',
  components: {
    AdminAuthLayout,
    AdminLayout,
  },
  inject: ['auth'],
  mounted() {
    console.log(this.auth)
  },
  beforeRouteUpdate(to, from, next) {
    console.log('update route')
    console.log(to, from)
    next()
  },
}
</script>

<style>
  /*  */
</style>
