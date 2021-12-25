<template>
  <BaseLayout />
</template>

<script>
import { isAuthenticated } from "./helpers/auth";
import $_route from "./helpers/route";
import BaseLayout from "./layouts/BaseLayout.vue";
import * as constStorage from "./constants/constStorage";

export default {
  name: "App",
  components: {
    BaseLayout,
  },
  provide() {
    return {
      auth: this.auth,
      login: this.login,
      logout: this.logout,
    };
  },
  data() {
    return {
      auth: {
        status: isAuthenticated(),
      },
    };
  },
  methods: {
    login() {
      this.auth.status = true;
      localStorage.setItem(constStorage.AUTH, JSON.stringify(this.auth));
      this.$router.push($_route("dashboard"));
    },
    logout() {
      this.auth.status = false;
      localStorage.removeItem(constStorage.AUTH);
      this.$router.push($_route("login"));
    },
  },
};
</script>
