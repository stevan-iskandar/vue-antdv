<template>
  <a-dropdown placement="bottomRight">
    <a-badge :count="notifCount" :overflow-count="99">
      <NotificationOutlined />
    </a-badge>
    <template #overlay>
      <a-menu v-if="notifications.length">
        <a-menu-item
          v-for="(notification, index) in notifications"
          :key="index"
        >
          <a href="javascript:;">{{ notification }}</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
import { NotificationOutlined } from "@ant-design/icons-vue";

export default {
  name: "AdminHeaderNotification",
  components: {
    NotificationOutlined,
  },
  data() {
    return {
      notifications: [],
    };
  },
  computed: {
    notifCount() {
      return this.notifications.length;
    },
  },
};
</script>

<style scoped>
.anticon-notification {
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
}
</style>
