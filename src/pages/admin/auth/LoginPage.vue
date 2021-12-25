<template>
  <h1>Login</h1>
  <a-button type="primary" shape="round" size="large" block @click="login">
    <LoginOutlined />
    Login
  </a-button>
</template>

<script>
import { LoginOutlined } from "@ant-design/icons-vue";

export default {
  name: "LoginPage",
  components: {
    LoginOutlined,
  },
  inject: ["login"],
  data() {
    return {};
  },
};
</script>
