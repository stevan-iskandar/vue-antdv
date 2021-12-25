<template>
  <a-layout :style="{ minHeight: '100vh' }">
    <AdminLayoutSidebar />
    <a-layout>
      <a-layout-header></a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer></a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import AdminLayoutSidebar from "./AdminLayoutSidebar.vue";

export default {
  name: "AdminLayout",
  components: {
    AdminLayoutSidebar,
  },
};
</script>
