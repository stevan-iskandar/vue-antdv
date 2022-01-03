<template>
  <a-layout :style="{ minHeight: '100vh' }">
    <a-layout-sider :trigger="null" v-model:collapsed="collapsed" collapsible>
      <div class="logo"></div>
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
      >
        <a-menu-item key="43">
          <router-link to="/asdasd">
            <InboxOutlined />
            <span>Option 3</span>
          </router-link>
        </a-menu-item>
        <AdminSiderMenu :menus="siderMenu" />
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <a-row>
          <a-col :span="12">
            <MenuUnfoldOutlined
              v-if="collapsed"
              class="trigger"
              @click="toggleCollapsed"
            />
            <MenuFoldOutlined v-else class="trigger" @click="toggleCollapsed" />
          </a-col>
          <a-col :span="12" :style="{ textAlign: 'right', padding: '0 1rem' }">
            <a-space align="center" :size="10">
              <AdminHeaderNotification />
              <AdminHeaderAvatar />
            </a-space>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="{ padding: '1rem 1rem 0' }">
        <router-view v-slot="slotProps">
          <transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
          </transition>
        </router-view>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  //
  InboxOutlined,
} from "@ant-design/icons-vue";
import AdminSiderMenu from "@/components/ui/admin-sider/AdminSiderMenu.vue";
import AdminHeaderNotification from "@/components/ui/admin-header/AdminHeaderNotification.vue";
import AdminHeaderAvatar from "@/components/ui/admin-header/AdminHeaderAvatar.vue";
import siderMenu from "@/constants/siderMenu";

export default {
  name: "AdminLayout",
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    //
    InboxOutlined,
    //
    AdminSiderMenu,
    AdminHeaderNotification,
    AdminHeaderAvatar,
  },
  data() {
    return {
      siderMenu,
      collapsed: false,
      selectedKeys: ["child21"],
      openKeys: ["parent1", "child2"],
    };
  },
  methods: {
    toggleCollapsed() {
      const preOpenKeys = this.openKeys;
      this.collapsed = !this.collapsed;
      this.openKeys = this.collapsed ? [] : preOpenKeys;
    },
  },
};
</script>

<style scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
