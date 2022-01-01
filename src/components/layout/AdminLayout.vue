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
        <a-menu-item key="1">
          <UserOutlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <VideoCameraOutlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <UploadOutlined />
          <span>nav 3</span>
        </a-menu-item>
        <a-menu-item key="21">
          <UserOutlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="22">
          <VideoCameraOutlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="23">
          <UploadOutlined />
          <span>nav 3</span>
        </a-menu-item>
        <a-menu-item key="31">
          <UserOutlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="32">
          <VideoCameraOutlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="33">
          <UploadOutlined />
          <span>nav 3</span>
        </a-menu-item>
        <a-menu-item key="42">
          <template #icon>
            <DesktopOutlined />
          </template>
          <span>Option 2</span>
        </a-menu-item>
        <a-menu-item key="43">
          <template #icon>
            <InboxOutlined />
          </template>
          <span>Option 3</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon>
            <MailOutlined />
          </template>
          <template #title>Navigation One</template>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>Navigation Two</template>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11">Option 11</a-menu-item>
            <a-menu-item key="12">Option 12</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
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
            <a-button type="default" @click="logout">Logout</a-button>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="{ padding: '1rem 1rem 0' }">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  InboxOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
import { mapActions } from "vuex";

export default {
  name: "AdminLayout",
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DesktopOutlined,
    InboxOutlined,
    MailOutlined,
    AppstoreOutlined,
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: ["5"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
    };
  },
  watch: {
    openKeys(_newVal, oldVal) {
      this.preOpenKeys = oldVal;
    },
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.openKeys = this.collapsed ? [] : this.preOpenKeys;
    },
    ...mapActions("auth", ["logout"]),
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
</style>
