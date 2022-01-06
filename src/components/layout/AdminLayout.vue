<template>
  <a-layout :style="{ minHeight: '100vh' }">
    <a-layout-sider
      :style="{ height: '100vh', overflow: 'auto', position: 'fixed', left: 0 }"
      :trigger="null"
      v-model:collapsed="collapsed"
      collapsible
    >
      <router-link :to="toDashboard">
        <div class="logo">
          <img class="logo-square" :src="logo" v-if="collapsed" />
          <img class="logo-wide" :src="logoWide" v-else />
        </div>
      </router-link>
      <a-menu
        :style="{
          ...menuWidth,
          height: 'calc(100vh - 64px)',
          overflow: 'auto',
          position: 'fixed',
          left: 0,
        }"
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
    <a-layout :style="layoutStyle">
      <a-layout-header
        class="drop-shadow"
        :style="{
          ...layoutContentWidth,
          height: '64px',
          background: '#fff',
          padding: 0,
          position: 'fixed',
        }"
      >
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
      <a-layout-content :style="{ margin: '64px 0 70px', padding: '0 1rem' }">
        <router-view v-slot="slotProps">
          <transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
          </transition>
        </router-view>
      </a-layout-content>
      <a-layout-footer
        :style="{
          ...layoutContentWidth,
          textAlign: 'center',
          position: 'fixed',
          bottom: '0px',
        }"
      >
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
import $_route from "@/helpers/route";
import * as constRoute from "@/constants/constRoute";

const logo = require("@/assets/vuejs.png");
const logoWide = require("@/assets/vuejs-wide.png");

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
      logo,
      logoWide,
      toDashboard: $_route(constRoute.DASHBOARD),
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
  computed: {
    menuWidth() {
      return this.collapsed ? { width: "80px" } : { width: "200px" };
    },
    layoutStyle() {
      return this.collapsed ? { marginLeft: "80px" } : { marginLeft: "200px" };
    },
    layoutContentWidth() {
      return this.collapsed
        ? { width: "calc(100% - 80px)" }
        : { width: "calc(100% - 200px)" };
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0.3rem;
  height: 0.3rem;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 100px;
}

::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-color: #a9a9a9a9;
}

.drop-shadow {
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #42b883;
}

.logo {
  height: 32px;
  margin: 16px;
  background: #fff;
}

.logo-square,
.logo-wide {
  display: block;
  height: 100%;
  margin: auto;
  padding: 4px;
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
