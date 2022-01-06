<template>
  <a-dropdown placement="bottomRight">
    <span>
      Admin
      <a-avatar size="large" :style="{ backgroundColor: '#42b883' }">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </span>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <UserOutlined />
          User
        </a-menu-item>
        <a-menu-divider></a-menu-divider>
        <a-menu-item @click="logoutModalShow">
          <LogoutOutlined />
          Logout
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
  <a-modal v-model:visible="logoutModal" title="Logout" @ok="logout">
    <p>Are you sure want to logout?</p>
  </a-modal>
</template>

<script>
import { UserOutlined, LogoutOutlined } from "@ant-design/icons-vue";

export default {
  name: "AdminHeaderAvatar",
  components: {
    UserOutlined,
    LogoutOutlined,
  },
  data() {
    return {
      logoutModal: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
    logoutModalShow() {
      this.logoutModal = true;
    },
  },
};
</script>
