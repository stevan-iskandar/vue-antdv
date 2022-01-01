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
import BaseAuthCard from "./../../../components/Base/BaseAuthCard.vue";

export default {
  name: "LoginPage",
  components: {
    LoginOutlined,
    BaseAuthCard,
  },
  data() {
    return {};
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", { token: "asdasdasd" });
    },
  },
};
</script>
