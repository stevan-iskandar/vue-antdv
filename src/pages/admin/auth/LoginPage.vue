<template>
  <base-auth-card>
    <h1>Login</h1>
    <a-button type="primary" shape="round" size="large" block @click="login">
      <LoginOutlined />
      Login
    </a-button>
  </base-auth-card>
</template>

<script>
import { LoginOutlined } from "@ant-design/icons-vue";
import BaseAuthCard from "@/components/base/BaseAuthCard.vue";

export default {
  name: "LoginPage",
  components: {
    LoginOutlined,
    BaseAuthCard,
  },
  methods: {
    login() {
      const payload = {
        route: this.$route,
        username: "qwe-asd-zxc",
        password: "asd-asd-asd",
      };

      this.$store.dispatch("auth/login", payload);
    },
  },
};
</script>
